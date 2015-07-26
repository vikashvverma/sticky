'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var NoteSchema = new Schema({
  userId: {type: String, required: true},
  title: String,
  description: {type: String, required: true},
  labels: [{type: String}],
  shared: [{
    userId: {type: String}
  }],
  created_on: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Note', NoteSchema);
