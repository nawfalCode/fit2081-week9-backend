// Mock data for generating random tweets

// List of random first and last names
const firstNames = [
  'John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Robert', 'Lisa', 'Richard', 'Jennifer',
  'Daniel', 'Maria', 'William', 'Sophia', 'James', 'Emma', 'Benjamin', 'Olivia', 'Alexander', 'Ava',
  'Noah', 'Isabella', 'Ethan', 'Mia', 'Matthew', 'Charlotte', 'Andrew', 'Amelia', 'Joshua', 'Harper',
  'Christopher', 'Evelyn', 'Ryan', 'Abigail', 'Nathan', 'Elizabeth', 'Samuel', 'Sofia', 'Tyler', 'Ella'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
  'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
  'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall',
  'Young', 'Allen', 'Sanchez', 'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson'
];

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
  'Nothing beats a good cup of coffee!',
  'Finally got tickets to that concert I\'ve been waiting for!',
  'Made the most delicious dinner tonight!',
  'Starting a new fitness routine tomorrow. Wish me luck!',
  'The sunset today was absolutely breathtaking!',
  'Learning a new programming language this weekend.',
  'Just PR\'d at the gym! Feeling strong!',
  'My garden is blooming beautifully this spring.',
  'Binged an entire season in one day. No regrets!',
  'Planning my next vacation, any suggestions?',
  'Just finished a challenging project at work.',
  'Found the best little coffee shop in town!',
  'Trying out a new recipe tonight, fingers crossed!',
  'Road trip with friends was the highlight of my week!',
  'Working from home today with my cat as my assistant.',
  'First day at my new job! Everyone seems great!',
  'Exploring the local farmers market this morning.',
  'My startup just got its first round of funding!',
  'Attended an amazing tech conference yesterday.',
  'Hiking in the mountains gives me so much peace.',
  'Taking a digital detox this weekend. See you Monday!'
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
  'Travel',
  'Fitness',
  'Health',
  'Music',
  'Movies',
  'Education',
  'Fashion',
  'Art',
  'Photography',
  'Gardening',
  'Cooking',
  'Home Improvement',
  'Gaming',
  'Finance',
  'Politics',
  'Science',
  'Environment',
  'Relationships',
  'Parenting',
  'Volunteering',
  'Meditation'
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