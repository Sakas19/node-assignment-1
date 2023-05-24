const express = require("express");
const router = express.Router();
const mockData = require("../mockData")

let movies = mockData;



router.get('/', (req, res) => {
    res.json(movies)
})


router.get("/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find(mov => mov.id === id);
  
    if (!movie) {
      return res
        .status(404)
        .json({ message: "No movie by that id is found!" });
    }

    res.json(movie);
  });



let nextId = "232324"

router.post("/", (req, res) => {
  const {Title, Year, Genre, Released} = req.body;

  if (!Title || !Year || !Released || !Genre) {
    return res.status(400).json({ message: "Title, Year, Released, and Genre fields are mandatory" });
  }

  const yearRegex = /^\d{4}$/;
  if (!yearRegex.test(Year)) {
    return res.status(400).json({ message: "Year must be a valid 4-digit number" });
  }

  const movie = req.body
  const newMovie = {
    ...movie,
    id: `tt${nextId}`
  };

  nextId++;
  movies = [newMovie, ...movies];
  res.json(newMovie);
});



router.put("/:id", (req, res) => {

    const id = req.params.id;
    const movie = req.body
    const index = movies.findIndex((mov) => mov.id === id)

    if (index === -1) {
        return res
          .status(404)
          .json({ message: "Movie doesn't exist!" });
      }
 
      const updadedmovie = { ...movies[index], ...movie}
      movies[index] = updadedmovie

      res.json(updadedmovie)
})


router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find(mov => mov.id === id)

  if (!movie) {
      return res
        .status(404)
        .json({ message: "NO movie by that id." });
    }

  const newData = movies.filter(mov => mov.id !== id);
  movies = newData

  res.json({ message: "Movie has been deleted." });
});


module.exports = router;

