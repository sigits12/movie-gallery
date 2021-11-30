import React from "react";
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-3">
        {props.movies.map((movie, index) => (
          <div
            className="col content" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src={movie.Poster} className="card-img-top" alt="..." /> */}
              <Link
                to={`detail/${movie.id}`}
                className='text-link'
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