const express = require('express')
const router = express.Router()

const comments = require("./data/comments")

router.get('/comments', comments.list)

router.get('/comments/:id', comments.show)

router.post('/comments', comments.create)

module.exports = { list, show, create }
