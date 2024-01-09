const express = require('express');
const router = express.Router();
const commentsController = require('../controller/comments');

router.get('/', commentsController.list);
router.get('/:id', commentsController.show);
router.post('/', commentsController.create);

module.exports = router;
