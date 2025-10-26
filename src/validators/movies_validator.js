const Joi = require("joi");

const createOrUpdateSchema = Joi.object({
  title: Joi.string().min(1).required(),
  type: Joi.string().valid("Movie", "TV Show").required(),
  director: Joi.string().min(1).required(),
  budget: Joi.alternatives()
    .try(Joi.number(), Joi.string())
    .required(),
  location: Joi.string().min(1).required(),
  duration: Joi.string().min(1).required(),
  year_or_time: Joi.string().min(1).required(),
});

const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
  search: Joi.string().allow("", null),
});

module.exports = {
  createOrUpdateSchema,
  paginationSchema,
};
