const express = require('express');
const admin = require('firebase-admin');
const { getDownloadURL} = require('firebase-admin/storage'); // v9 or later (assumed)
const router = express.Router();
const storage = admin.storage();

const videoData = {}; // Object to store video URLs (optional caching)
async function getVideoUrl(objTerm) {
  try {
    try {
        const bucket = storage.bucket('gs://signlearning-6c06e.appspot.com');
        const storageRef = bucket.file(`Sign_Learning/Signs/Objects/${objTerm}.mp4`);
  
      const downloadURL = await getDownloadURL(storageRef); // Use the correct getDownloadURL function
      videoData[objTerm] = downloadURL; // Store URL in cache (optional)
      return downloadURL;

    } catch (error) {
      console.error('Error accessing storage:', error);
      throw new Error('Failed to retrieve video URL: ' + error.message);
    }
  } catch (error) {
    console.error("Error retrieving video URL:", error);
    throw error; 
  }
}
router.get('/getVideoURL', async (req, res) => {
  try {
    const objTerm = req.query.objTerm;
    console.log("Received objTerm:",objTerm);

    const videoURL = await getVideoUrl(objTerm); // Call the getVideoUrl function

    // **Use videoURL here**
    if (videoURL) { // Check if videoURL exists (might be null if not found)
      const signedUrl = await storage.bucket('gs://signlearning-6c06e.appspot.com') // Use storage.bucket() for clarity
        .file(`Sign_Learning/Signs/Objects/${objTerm}.mp4`) // Construct file path based on objTerm
        .getSignedUrl({
          action: 'read',
          expires: new Date(Date.now() + 15 * 60 * 1000),
        });

      res.status(200).json({ videoURL: signedUrl });
    } else {
      // Optional: Handle case where video is not found
      res.status(404).json({ error: 'Video not found' });
    }
  } catch (error) {
    console.error('Error retrieving video:', error);
    res.status(500).json({ error: 'Error retrieving video' }); // Generic error for security
  }
});
module.exports = router;
