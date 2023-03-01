const mongoose = require('mongoose');

// Connect to your MongoDB database using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Define a MongoDB schema for your video metadata
// Define a MongoDB schema for video metadata
const videoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
  }, { collection: 'Videos' });

// Define a MongoDB model for your video metadata using the schema
const VideoModel = mongoose.model('Video', videoSchema);

// Export the Video model
module.exports = { VideoModel };