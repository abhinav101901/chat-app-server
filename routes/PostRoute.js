const express = require('express')
const { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } = require('../controllers/PostController.js')
const authMiddleWare = require('../middleware/AuthMiddleware.js')
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts)

module.exports = router 