const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route('/:userId')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;