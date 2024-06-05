const Joi = require('@hapi/joi');
const { validateTextHandler } = require('../controllers/textController');

const textRoutes = [
  {
    method: 'POST',
    path: '/validate',
    options: {
      validate: {
        payload: Joi.object({
          inputText: Joi.string().required(),
        }),
      },
    },
    handler: validateTextHandler,
  },
];

module.exports = textRoutes;
