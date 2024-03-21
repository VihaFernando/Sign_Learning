const express = require('express');
const admin = require('firebase-admin');
//const cors = require('cors');
const router = express.Router();
//const serviceAccount = require('./signlearning-6c06e-firebase-adminsdk-4wxg0-44f329eb40.json');

//const app = express();

// Enable CORS for all routes
//app.use(cors());

// Initialize Firebase Admin SDK


const bucket = admin.storage().bucket();

// Define a route to retrieve videos
router.get('/videos/:videoName', (req, res) => {
  const videoName = req.params.videoName;
  const file = bucket.file(`Sign_Learning/Signs/Objects/${videoName}`);

  file.createReadStream()
    .on('error', (err) => {
      console.error(err);
      res.status(500).send('Error retrieving video');
    })
    .pipe(res);
});

module.exports = router;