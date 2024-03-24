const express = require('express');
const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin');

const serviceAccount = require('./signlearning-6c06e-firebase-adminsdk-4wxg0-44f329eb40.json');
const credential = admin.credential.cert(serviceAccount);

const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Initialize Firebase Admin SDK
initializeApp({
  credential: credential,
  storageBucket: 'gs://signlearning-6c06e.appspot.com',
  databaseURL: "https://signlearning-6c06e-default-rtdb.firebaseio.com"
});

// Import the router from server1.js
const server1Router = require('./server1');
const videoHandlerRouter = require('./videoHandler')
const server2Router = require('./server2')

// Use the router from server1.js
app.use('/', server1Router);
app.use('/',videoHandlerRouter);
app.use('/',server2Router);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;