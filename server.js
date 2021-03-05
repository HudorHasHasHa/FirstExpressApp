const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use('/user', (req, res, next) => {
  res.send('You need to login first');
  next();
});

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/user/')

app.use((req, res) => {
  // res.status(404).send('404 not found...');
  res.show('fot.png');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});