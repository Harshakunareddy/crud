const express = require("express");
const { createMovie, getMovies, updateMovie, deleteMovie } = require("../controllers/movies_controller");
const router = express.Router();

router.post("/post-movie", createMovie);

router.get("/get-movies", getMovies);

router.put("/update-movie/:id", updateMovie);

router.delete("/delete-movie/:id", deleteMovie);

module.exports = router;
