const express =require('express');
const router =express.Router();
const message_controller =require('../controller/message_controller');

router.post('/post_message',message_controller);



module.exports =router; 