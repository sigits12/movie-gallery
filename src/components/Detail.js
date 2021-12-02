import React, { useEffect, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';

const Detail = () => {
  const { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);

  useEffect(() => {
    showDetail(id)
  }, [])

  return selectedMovie ? (
    <div className="row">
      <Link to={'/'} className="mb-5 text-decoration-none link-secondary">Back</Link>
      <div className="container d-flex justify-content-between">
        <div className="m-2" style={{ width: "100%" }}>
          <img
            src={'https://image.tmdb.org/t/p/w500/' + selectedMovie.backdrop_path}
            class="w-100 shadow-1-strong rounded mb-4"
            alt={'Image of ' + selectedMovie.title}
            loading="lazy"
          />

        </div>
        <div className="m-4">
          <ul>
            <ol><i>Title</i> : <b>{selectedMovie.title}</b> </ol>
            <ol><i>Year</i> : <b>{new Date(selectedMovie.release_date).getFullYear()}</b> </ol>
            <ol><i>Released</i> : <b>{new Date(selectedMovie.release_date).toString()}</b> </ol>
            <ol>
              <i>Genre</i> :
            <ol>
                {selectedMovie.genres.map((m, i) =>
                  <li key={i}><b>{m.name}</b></li>
                )}
              </ol>
            </ol>
            <ol><i>Rated</i> : <b>{selectedMovie.vote_average}</b> </ol>
            <ol><i>Popularity : <b>{selectedMovie.popularity}</b></i></ol>
          </ul>
        </div>

      </div>
    </div>
  ) : (
      <span>Loading movies...</span>
    );
};

export default Detail;
