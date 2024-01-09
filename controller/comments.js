const comments = require("../data/comments");

function list(req, res) {
  res.json(comments);
}

function show(req, res) {
  const commentId = parseInt(req.params.id);
  const comment = comments.find(u => u.id === commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
}

function create(req, res) {
  const counter = comments.length;
  const newComment = {
    id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };

  comments.push(newComment);
  res.json(newComment);
}

module.exports = { list, show, create };
