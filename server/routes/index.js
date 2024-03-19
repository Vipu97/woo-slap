const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const eventController = require('../Controllers/eventController');
const questionController = require('../Controllers/questionController');

router.use('/user',userController);
router.use('/event',eventController);
router.use('/question',questionController);

module.exports = router;