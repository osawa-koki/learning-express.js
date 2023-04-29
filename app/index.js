import express from "express";

import initializer from './initializer.js';

initializer();

const app = express();
const apiRouter = express.Router();

apiRouter.get('', (req, res) => {
  res.send('Hello GET method!!!');
});
apiRouter.post('', (req, res) => {
  res.send('Hello POST method!!!');
});
apiRouter.put('', (req, res) => {
  res.send('Hello PUT method!!!');
});
apiRouter.delete('', (req, res) => {
  res.send('Hello DELETE method!!!');
});
app.use('/hello', apiRouter);

app.use(express.static('public'));

const listener = app.listen(3000, function() {
  console.log(`Listening on port ${listener.address().port}.`);
});
