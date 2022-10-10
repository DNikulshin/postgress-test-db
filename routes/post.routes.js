const Router = require('express')
const postController = require('../controller/post.controller')
const router = new Router()

router.post('/post',postController.createPost)
router.get('/post', postController.getPost)
// router.get('/user/:id', userController.getOneUser)
// router.put('/user', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)

module.exports = router