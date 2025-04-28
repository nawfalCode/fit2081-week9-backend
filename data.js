// Mock data for generating random tweets

// List of random first and last names
const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Robert', 'Lisa', 'Richard', 'Jennifer'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'];

// List of random tweet content
const tweetContents = [
  'Having a great day at the beach!',
  'Just finished reading an amazing book!',
  'Can\'t believe what just happened!',
  'New project launch today, so excited!',
  'Anyone else watching the game tonight?',
  'This weather is perfect for hiking!',
  'The traffic was terrible this morning.',
  'Just adopted a new puppy!',
  'Working on my coding skills today.',
  'Nothing beats a good cup of coffee!'
];

// List of random tweet subjects
const tweetSubjects = [
  'Daily Life',
  'Fun',
  'Work',
  'Technology',
  'Sports',
  'Nature',
  'Food',
  'Pets',
  'Books',
  'Travel'
];

// Generate a random name
const getRandomName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Generate random tweet content
const getRandomContent = () => {
  return tweetContents[Math.floor(Math.random() * tweetContents.length)];
};

// Generate a random tweet subject
const getRandomSubject = () => {
  return tweetSubjects[Math.floor(Math.random() * tweetSubjects.length)];
};

module.exports = {
  getRandomName,
  getRandomContent,
  getRandomSubject
};