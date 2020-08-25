'use strict';


const express = require('express');
const UserModel = require('../models/user-model.js')
const router = new express.Router();
const users = new UserModel();


router.post('/signup', async (req, res) => {
  // hash password
  // format req.body to schema model to prep for lift off
  // adding this to mongo database
  req.body.password = await UserModel.encrypt(req.body.password, 5)
  
  const result = await users.create(req.body)
  res.send(result)
})

router.post('/signin', (req, res) => {
  // validate username
  // validate username and the password
  // create jwt token with secret and send back with cookie header and shit
  res.send('result')
})

router.get('/users', (req, res) => {
  // get all users
  res.send('alive')
})

module.exports = router;