'use strict';


const express = require('express');
const userModel = require('./models/user-model.js')
const app = express();
const auth = require('./routes/auth.js')
const v1 = require('./routes/v1.js')
app.use(express.json());

app.use(auth)
app.use('/api',v1)


// app.post('/signup', async (req, res) => {
//   // hash password
//   // format req.body to schema model to prep for lift off
//   // adding this to mongo database
//   req.body.password = await userModel.encrypt(req.body.password, 5)
  
//   const result = userModel.create(req.body)
//   res.send(result)
// })

// app.post('/signin', (req, res) => {
//   // validate username
//   // validate username and the password
//   // create jwt token with secret and send back with cookie header and shit
//   res.send('result')
// })

// app.get('/users', (req, res) => {
//   // get all users
//   res.send('alive')
// })



module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log('WE GUCCI')
    });
  }
};