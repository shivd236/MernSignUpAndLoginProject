const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

// endpoints;
router.post('/create-user',userController.createUser);

router.post('/login',userController.login);



module.exports = router;