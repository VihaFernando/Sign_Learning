import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import axios from "axios"; // Import Axios
import { drawRect } from "./utilities";
import "./objectDetection.css"
import MainHeader from "./MainHeader";
import Footer from "./Footer";

const ObjectDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("COCO-SSD model loaded.");
    // Loop and detect objects
    setInterval(() => {
      detect(net);
    }, 10);
  };

  useEffect(() => {
    async function initializeTensorFlow() {
      try {
        await tf.setBackend("webgl");
        console.log("TensorFlow.js initialized with WebGL backend.");
        // Other initialization code...
      } catch (error) {
        console.error("Error initializing TensorFlow.js:", error);
      }
    }

    initializeTensorFlow();
  }, []);

  const detect = async (net) => {
    // Check if webcam data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw detected objects on canvas
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);

      // Convert object to JSON string
      const objString = JSON.stringify(obj);
      console.log(objString);

      // Fetch video URL for detected object from backend
      handleScanImage(objString);
    }
  };

  const handleScanImage = async (objString) => {
    try {
      const obj = JSON.parse(objString);

      // Check if obj is valid and has a class property
      if (!obj || !obj.length || !obj[0]?.class) {
        console.log("No objects detected or class property missing");
        setVideoUrl("");
        setIsPlayingVideo(false);
        return; // Exit the function if no valid object is found
      }

      const objTerm = obj[0].class;
      const url = `http://localhost:8000/getVideoURL?objTerm=${objTerm}`;
      console.log("Fetching video URL:", url);

      const response = await axios.get(url);
      console.log("Backend response:", response);

      if (
        response &&
        response.status === 200 &&
        response.data &&
        response.data.videoURL
      ) {
        setVideoUrl(response.data.videoURL);
        setShowVideoPopup(true);
        setIsPlayingVideo(true);
      } else {
        console.error("Failed to fetch video URL:", response);
        setVideoUrl("");
        setIsPlayingVideo(false);
      }
    } catch (error) {
      console.error("Error retrieving video:", error);
      setVideoUrl("");
      setIsPlayingVideo(false);
    }
  };

  // Run the COCO-SSD model on component mount
  useEffect(() => {
    runCoco();
  }, [runCoco]);

  return (
    <div className="obj">
      <MainHeader />
      <header className="obj-header">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 10,
            width: 640,
            height: 480,
          }}
        />

        {showVideoPopup && (
          <div className="video-popup">
            <video
              controls
              autoPlay
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
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="close-button"
              onClick={() => setShowVideoPopup(false)}
              style={{
                position: "absolute",
                top: "80px",
                right: "10px",
                zIndex: 12,
                color: "pink"

              }}
            >
              Close
            </button>
          </div>
        )}
        {isPlayingVideo && (
          <div>
            <video controls width="500">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </header>

    </div>
  );
};

export default ObjectDetection;