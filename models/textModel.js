const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  inputText: {
    type: String,
    required: true,
  },
  validationResult: {
    type: String,
    required: true,
    enum: ['valid', 'invalid'],
  },
});

module.exports = mongoose.model('Text', TextSchema);
