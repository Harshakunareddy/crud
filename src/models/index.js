const { sequelize } = require("../config/db");
const Movie = require("./movies_model");

const db = {};
db.sequelize = sequelize;
db.Movie = Movie;

module.exports = db;
