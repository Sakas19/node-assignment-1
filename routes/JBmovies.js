const express = require("express");
const router = express.Router();
const mockData = require("../mockData");

// Load initial data
let JBmovies = mockData.JBmovies;

// Get all movies
router.get("/", (req, res) => {
  res.json(JBmovies);
});

// Get a specific movie by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const movieId = parseInt(id);
  const movie = JBmovies.find((movie) => movie.id === movieId);

  if (!movie) {
    return res
      .status(404)
      .json({ message: "No movie found with the specified ID" });
  }

  res.json(movie);
});

// Delete a movie by ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const movieId = parseInt(id);

  const movieIndex = JBmovies.findIndex((movie) => movie.id === movieId);

  if (movieIndex === -1) {
    return res
      .status(404)
      .json({ message: "No movie found with the specified ID" });
  }

  JBmovies.splice(movieIndex, 1);

  res.json({ message: "The movie has been deleted" });
});

// Generate a new unique ID for new movies
let nextId = 28234;

// Add a new movie
router.post("/", (req, res) => {
  const movie = req.body.movie;
  const newMovie = {
    ...movie,
    id: nextId,
  };

  nextId++;

  JBmovies.push(newMovie);
  res.json(newMovie);
});

// Update a movie by ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const movieId = parseInt(id);
  const updatedMovie = req.body.movie;

  const movieIndex = JBmovies.findIndex((movie) => movie.id === movieId);

  if (movieIndex === -1) {
    return res
      .status(404)
      .json({ message: "No movie found with the specified ID" });
  }

  JBmovies[movieIndex] = {
    ...JBmovies[movieIndex],
    ...updatedMovie,
  };

  res.json(JBmovies[movieIndex]);
});

module.exports = router;

