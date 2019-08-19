const { Router } = require('express');
const posts = require('../data/posts.json');

const postRouter = Router();

// endpoint to get all posts
postRouter.get('/posts', (req, res) => {
  res.json(posts);
});

// endpoint to get a specific post
postRouter.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const post = posts.find(post => post.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

module.exports = postRouter;
