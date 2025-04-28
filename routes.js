const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { getRandomName, getRandomContent, getRandomSubject } = require('./data');

const router = express.Router();

// In-memory tweets storage
const tweets = [];

// Generate some initial tweets
function generateInitialTweets(count = 10) {
  for (let i = 0; i < count; i++) {
    tweets.push(generateRandomTweet());
  }
}

// Function to generate a single random tweet
function generateRandomTweet() {
  return {
    id: uuidv4(),
    userName: getRandomName(),
    content: getRandomContent(),
    subject: getRandomSubject(),
    createdAt: new Date().toISOString()
  };
}

// Generate initial tweets when the server starts
generateInitialTweets();

// GET /api/tweets - Returns all tweets
router.get('/tweets', (req, res) => {
    console.log('Fetching all tweets');
  res.json(tweets);
});

// GET /api/tweets/:id - Returns a tweet by ID
router.get('/tweets/:id', (req, res) => {
    console.log(`Fetching tweet with ID: ${req.params.id}`);

  const tweet = tweets.find(tweet => tweet.id === req.params.id);
  
  if (!tweet) {
    return res.status(404).json({ error: 'Tweet not found' });
  }
  
  res.json(tweet);
});

// POST /api/tweets/new - Generates a new random tweet
router.post('/tweets/new', (req, res) => {
    console.log('Generating a new random tweet');
  const newTweet = generateRandomTweet();
  tweets.push(newTweet);
  res.status(201).json(newTweet);
});

module.exports = router;