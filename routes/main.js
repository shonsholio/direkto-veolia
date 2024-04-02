const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.main)
router.get('/op1', mainController.info)
router.get('/op2', mainController.info)



module.exports = router 