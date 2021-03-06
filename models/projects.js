const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
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
  "url": {
    type: String,
    required: true
  },
  "createdAt": {type: String,
    required: true,
    default: Date.now()
  }
});

module.exports = projects = mongoose.model('projects', ProjectsSchema);