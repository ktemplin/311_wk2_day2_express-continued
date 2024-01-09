const express = require('express')
const router = express.Router()

router.get('/comments', (req, res) => {
  res.json(comments);
});

router.get('/comments/:_id', (req, res) => {
  // console.log('Received request for comment ID:', req.params._id);

  const commentId = parseInt(req.params._id);
  const comment = comments.find(u => u._id === commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('comment not found');
  }
});

router.post('/comments', (req, res) => {
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
