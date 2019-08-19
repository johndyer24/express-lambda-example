const express = require('express');
const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');

// create the server and setup routes
const app = express();
app.use(postRouter);
app.use(userRouter);
app.get('/', (req, res) => res.send('Express Lambda Example Server'));

module.exports = app;
