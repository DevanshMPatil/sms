const mongoose = require('mongoose');

// Disable strictQuery to avoid deprecation warnings
mongoose.set("strictQuery", false);

// MongoDB connection string
const connectionString = '';

// Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('Connection error:', err));

// Export mongoose for reusability
module.exports = mongoose;
