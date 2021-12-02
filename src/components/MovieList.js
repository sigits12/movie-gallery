import React from "react";
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.movies.map((movie, index) => (
          <div className="col content mb-2" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} className="card-img-top" alt={'Image of ' + movie.title} loading="lazy" />
              <Link
                to={`detail/${movie.id}`}
                className='text-decoration-none link-dark'
                key={movie.id}
              >
                <div className="card-body">
                  <p className="card-text">{movie.title} - {new Date(movie.release_date).getFullYear()}</p>
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