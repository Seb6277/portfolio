const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  "src": {
    type: String,
    required: true,
  },
  "caption": {
    type: String
  },
  "header": {
    type: String,
    required: true,
    unique: true
  },
  "createdAt": {type: String,
    required: true,
    default: Date.now()
  }
});