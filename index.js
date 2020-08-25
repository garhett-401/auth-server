'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const server = require('./server.js')

const port = process.env.PORT;


mongoose.connect(process.env.MONGO_URI_PORT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const db = mongoose.connection;

db.on('open', () => {
  console.log('WE GUCCI');
});

server.start(port)