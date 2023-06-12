const Joi = require("joi");

const validationSchema = Joi.object().keys({
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/)
    .required(),
});

module.exports = validationSchema;
