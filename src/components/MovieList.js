import React from "react";
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-3">
        {props.movies.map((movie, index) => (
          <div
            className="col content" key={index}>
              <div class="card" style={{ width: "18rem" }}>
                <img src={movie.Poster} class="card-img-top" alt="..." />
                <Link
                  to={`detail/${movie.imdbID}`}
                  className='text-link'
                  key={movie.imdbID}
                >
                  <div class="card-body">
                    <p class="card-text">{movie.Title} - {movie.Year}</p>
                  </div>
                </Link>
              </div>
          </div>
        ))}
          </div>
    </div>


  );
};

export default MovieList;