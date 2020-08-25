'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const Mongo = require('./mongo-file.js');
const userSchema = require('./user-schema.js');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

class Users extends Mongo{
  constructor()  {
    super(userSchema)
  }

  static async encrypt(value) {
    return await bcrypt.hash(value, 5); 
  }

  static async generateToken(user, secret)  {
    return jwt.sign(user, secret)
  }
}


module.exports = Users;