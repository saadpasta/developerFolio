const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const videoRouter = require('./routes/videos');
const cors = require('cors'); // import cors

// Load environment variables from .env file
dotenv.config();

const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors()); // enable CORS for all routes

// Use the video router for /api/videos endpoint
app.use('/api/videos', videoRouter);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});