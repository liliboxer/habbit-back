const mongoose = require('mongoose');

const habbitSchema = new mongoose.Schema({
  habbit: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Habit', habbitSchema);
