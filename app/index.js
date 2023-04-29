import express from "express";

import initializer from './initializer.js';

initializer();

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello GET method!!!');
});
app.post('/hello', (req, res) => {
  res.send('Hello POST method!!!');
});
app.put('/hello', (req, res) => {
  res.send('Hello PUT method!!!');
});
app.delete('/hello', (req, res) => {
  res.send('Hello DELETE method!!!');
});

const listener = app.listen(process.env.PORT, function() {
  console.log(`Listening on port ${listener.address().port}.`);
});
