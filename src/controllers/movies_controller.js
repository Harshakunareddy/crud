const { Op } = require("sequelize");
const { Movie } = require("../models");
const { createOrUpdateSchema, paginationSchema } = require("../validators/movies_validator");


exports.createMovie = async (req, res) => {
  const { error, value } = createOrUpdateSchema.validate(req.body);
  if (error) {
    return res.status(422).json({ success: false, message: error.message });
  }

  try {
    const movie = await Movie.create(value);
    return res.status(201).json({
      success: true,
      data: movie,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "error while creating movie" });
  }
};


exports.getMovies = async (req, res) => {
  const { error, value } = paginationSchema.validate(req.query);
  if (error) {
    return res.status(422).json({ success: false, message: error.message });
  }

  const { page, limit, search } = value;
  const offset = (page - 1) * limit;
  const where = {};

    if (search) {
        where[Op.or] = [
            { title: { [Op.iLike]: `%${search}%` } },
            { director: { [Op.iLike]: `%${search}%` } },
            { budget: { [Op.iLike]: `%${search}%` } },
            { location: { [Op.iLike]: `%${search}%` } },
            { duration: { [Op.iLike]: `%${search}%` } },
            { year_or_time: { [Op.iLike]: `%${search}%` } },
        ];
    }

  try {
    const { rows, count } = await Movie.findAndCountAll({
        where,
        limit,
        offset,
        order: [["id", "DESC"]]
    });

    const totalPages = Math.ceil(count / limit);

    return res.status(200).json({
        success: true,
        data: rows,
        meta: {
            page,
            limit,
            total: count,
            totalPages,
        },
    });

    } catch (err) {
        console.error("error:", err);
        return res
            .status(500)
            .json({ success: false, message: "error while get movies" });
    }

};

exports.updateMovie = async (req, res) => {
  const { error, value } = createOrUpdateSchema.validate(req.body);
  if (error) {
    return res.status(422).json({ success: false, message: error.message });
  }

  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    await movie.update(value);

    return res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (err) {
    console.error("error:", err);
    return res
      .status(500)
      .json({ success: false, message: "error while update movie api call" });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    await movie.destroy();
    return res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    console.error("error:", err);
    return res.status(500).json({ 
        success: false, 
        message: "error while delete movie api call" 
    });
  }
};
