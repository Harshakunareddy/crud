const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Movie = sequelize.define("Movie", {
  title: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM("Movie", "TV Show"), allowNull: false },
  director: { type: DataTypes.STRING, allowNull: false },
  budget: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  duration: { type: DataTypes.STRING, allowNull: false },
  year_or_time: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: "movies",
  timestamps: true,
  underscored: true,
});

module.exports = Movie;
