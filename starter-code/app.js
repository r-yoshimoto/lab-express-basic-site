const express = require('express')

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Go see my favorite artist on localhost:3000!');
});