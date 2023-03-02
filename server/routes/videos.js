const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { VideoModel } = require('../models/video');

// Load environment variables from .env file
dotenv.config();

const router = express.Router();

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Handle GET requests to /api/videos endpoint
router.get('/', async (req, res) => {
  try {
    const videos = await VideoModel.find();
    if (videos.length === 0) {
      res.status(404).json({ message: 'No videos found' });
    } else {
      res.json(videos);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;