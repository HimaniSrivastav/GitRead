const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.post('/api/analyze', async (req, res) => {
  try {
    const { repoUrl } = req.body;
    console.log('Received request for:', repoUrl); // Add logging

    if (!repoUrl) {
      return res.status(400).json({
        success: false,
        error: 'Repository URL is required'
      });
    }

    // For now, return a simple response
    return res.json({
      success: true,
      summary: `Test summary for: ${repoUrl}`
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
});

const PORT = process.env.PORT || 5000;

// Add error handling for server startup
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log(`Server running on port ${PORT}`);
});

// Add global error handler
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});