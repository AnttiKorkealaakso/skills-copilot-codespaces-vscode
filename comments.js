// Create web server that listens on port 3000
// When it receives a request to /comments, it should return a list of comments
// The list of comments should be an array of objects
// Each object should have a username and comment property

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { username: 'Todd', comment: 'lolol' },
    { username: 'Skyler', comment: 'I would also like to lol' },
    { username: 'Sk8erBoi', comment: 'Plz don\'t steal my identity' },
    { username: 'Avril', comment: 'lol' }
  ]);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
