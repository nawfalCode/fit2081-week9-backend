const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Twitter-like API! Use /api/tweets to access the tweets.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});