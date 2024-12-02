const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/jwtAuth');

const {  validateUser, createUser  } = require('../controllers/user.controller');

router.post('/register', createUser);