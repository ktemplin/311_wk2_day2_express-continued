const express = require('express')
const router = express.Router()
const comments = require("../data/comments")

router.get('/', (req, res) => {
  res.json(comments);
});

router.get('/:_id', (req, res) => {

  const commentId = parseInt(req.params._id);
  const comment = comments.find(u => u._id === commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('comment not found');
  }
});

router.post('/', (req, res) => {
  const counter = comments.length;
  const newComment = {
    id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };

comments.push(newComment);
res.json(newComment);
});

module.exports = router; 
