const Joi = require("joi");

const subscriptionValidationSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

module.exports = subscriptionValidationSchema;
