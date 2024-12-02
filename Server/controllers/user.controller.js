const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser } = require('../services/user.service');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');

dotenv.config();

