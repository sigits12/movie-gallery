import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start content" key={index}>
          <img src={movie.Poster} alt="movie_image"></img>
        </div>
      ))}
    </>
  )
};

export default MovieList;