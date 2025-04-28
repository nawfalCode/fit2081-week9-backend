This is app represents a simple backend server that serves HTTP API endpoints.
It should be built using node.js and express.js.
There is no need to use any persistent database or ORM.
The data can be stored in memory using a simple array or object.
The server works to simulate a twitter like backend application. 
Each data item should have:

- id: a unique identifier for the data item
- userName: First and last name of the user who created the data item
- content: the content of the data item
- subject: the subject of the data item
- createdAt: the date and time when the data item was created

The server should have the following endpoints:

- GET /api/tweets: Returns a list of all tweets
- GET /api/tweets/:id: Returns a single tweet by its ID

The name of the user who created the tweet should be a random name from a list of names.
The content of the tweet and its subject should be a random sentence from a list of sentences.
