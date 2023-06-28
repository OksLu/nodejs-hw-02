const Joi = require("joi");

const authValidationSchema = Joi.object().keys({
  password: Joi.string().min(8).max(25).required(),
  email: Joi.string().email().required(),
});

module.exports = authValidationSchema;
