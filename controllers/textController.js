const Text = require('../models/textModel');
const { validateText } = require('../services/inferenceService');

const validateTextHandler = async (request, h) => {
  const { inputText } = request.payload;

  const isValid = await validateText(inputText);

  const validationResult = isValid ? 'valid' : 'invalid';

  const newText = new Text({
    inputText,
    validationResult,
  });

  await newText.save();

  return h.response(newText).code(201);
};

module.exports = { validateTextHandler };
