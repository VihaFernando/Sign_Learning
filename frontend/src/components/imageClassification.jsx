import React, { useState, useEffect, Fragment } from "react";
import * as tf from "@tensorflow/tfjs";
import { DropzoneArea } from "material-ui-dropzone";
import { Backdrop, Chip, CircularProgress, Grid, Stack } from "@mui/material";
import {storage, ref, getDownloadURL } from "./firebase"; // Import necessary Firebase storage functions
import labels from "./imagenet-label.json";


const ImageClassification =()=> {
  const [model, setModel] = useState(null);
  const [classLabels, setClassLabels] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const [confidence, setConfidence] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  useEffect(() => {
    
    const loadModel = async () => {
      // Load your model here
      const model_url = "MobileNetV3Large/model.json";
      const loadedModel = await tf.loadGraphModel(model_url);
      setModel(loadedModel);
    };
  
    
    const getClassLabels = async () => {
      setClassLabels(labels);
    };

    loadModel();
    getClassLabels();
  }, []);

  const readImageFile = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  };

  const createHTMLImageElement = async (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = imageSrc;
    });
  };

  const handleImageChange = async (files) => {
    setShowVideoPopup(false); // Hide video popup when a new image is selected
    setIsPlayingVideo(false); // Stop video playback when a new image is selected

    if (files.length === 0) {
      setConfidence(null);
      setPredictedClass(null);
      setVideoUrl('');
      return;
    }

    if (files.length === 1) {
      setLoading(true);

      const imageSrc = await readImageFile(files[0]);
      const image = await createHTMLImageElement(imageSrc);

      // tf.tidy for automatic memory cleanup
      tf.tidy(() => {
        const tensorImg = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
        const result = model.predict(tensorImg);

        const predictions = result.dataSync();
        const predicted_index = result.as1D().argMax().dataSync()[0];

        const predictedClass = classLabels[predicted_index];
        const confidence = Math.round(predictions[predicted_index] * 100);

        setPredictedClass(predictedClass);
        setConfidence(confidence);

        // Fetch video URL based on predicted class
        const storageRef = ref(storage, `Sign_Learning/Signs/Objects/${predictedClass}.mp4`);
        getDownloadURL(storageRef)
          .then(url => {
            setVideoUrl(url);
            setShowVideoPopup(true); // Show video popup when video URL is found
          })
          .catch(error => {
            console.error('Error retrieving video:', error);
            setVideoUrl('');
            setLoading(false);
          })
          .finally(() => setLoading(false));
      });
    }
  };

  const handleVideoToggle = () => {
    setIsPlayingVideo(!isPlayingVideo); // Toggle video playback
  };

  return (
    <Fragment>
      <Grid container className="App" direction="column" alignItems="center" justifyContent="center" marginTop="12%">
        <Grid item>
          <h1 style={{ textAlign: "center", marginBottom: "1.5em" }}>Image Classifier</h1>
          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneText={"Add an image"}
            onChange={handleImageChange}
            maxFileSize={10000000}
            filesLimit={1}
            showAlerts={["error"]}
            style={{
              zIndex:10
            }}
          />
          <Stack style={{ marginTop: "2em", width: "12rem" }} direction="row" spacing={1}>
            <Chip
              label={predictedClass === null ? "Prediction:" : `Prediction: ${predictedClass}`}
              style={{ justifyContent: "left" }}
              variant="outlined"
            />
            <Chip
              label={confidence === null ? "Confidence:" : `Confidence: ${confidence}%`}
              style={{ justifyContent: "left" }}
              variant="outlined"
            />
          </Stack>
        </Grid>
      </Grid>

      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {showVideoPopup && (
        <div className="video-popup">
          <video
            controls
            autoPlay={isPlayingVideo}
            width="640"
            height="480"
            style={{
              position: "absolute",
              zIndex: 11,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              
            }}
            onPlay={handleVideoToggle}
            onPause={handleVideoToggle}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className="close-button"
            onClick={() => {
              setShowVideoPopup(false);
              setIsPlayingVideo(false); // Stop video playback when closing video popup
            }}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 12,
            }}
          >
            Close
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default ImageClassification;