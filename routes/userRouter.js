const { Router } = require('express');
const users = require('../data/users.json');

const userRouter = Router();

// endpoint to get all users
userRouter.get('/users', (req, res) => {
  res.json(users);
});

// endpoint to get a specific user
userRouter.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = userRouter;
