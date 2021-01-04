const express = require('express')
const movieRouter = express.Router()
const Movie = require("../models/movie.js")
//const uuid = require('uuid/v4')

/* const movies = [
  { title: "die hard", genre: "action", _id: uuid() },
  { title: "star wars IV", genre: "fantasy", _id: uuid() },
  { title: "lion king", genre: "fantasy", _id: uuid() },
  { title: "friday the 13th", genre: "horror", _id: uuid() },
] */

// Get All
movieRouter.get("/", (req, res, next) => {
  //this will pull the data from DB if there is no error
Movie.find((err, movies) => {
  //This will deisplay the error f there is any
if(err){
  res.status(500)
  return next(err)
}
//this will display success status if there is no error
return res.status(200).send(movies)
})
})


// Post One
 movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body)
  newMovie.save((err, saveMovie) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(saveMovie)
  })
})

/*
// Get One
movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId
  const foundMovie = movies.find(movie => movie._id === movieId)
  if(!foundMovie){
    const error = new Error(`The item with id ${movieId} was not found.`)
    res.status(500)
    return next(error)
  }
  return res.status(200).send(foundMovie)
})


// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
  const genre = req.query.genre
  if(!genre){
    const error = new Error("You must provide a genre")
    res.status(500)
    return next(error)
  }
  const filteredMovies = movies.filter(movie => movie.genre === genre)
  return res.status(200).send(filteredMovies)
})


// Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  movies.splice(movieIndex, 1)
  return res.send("SUccessfully deleted movie!")
})


// Update One
movieRouter.put("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId
  const updateObject = req.body
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  const updatedMovie = Object.assign(movies[movieIndex], updateObject)
  return res.status(201).send(updatedMovie)
})
 */

module.exports = movieRouter