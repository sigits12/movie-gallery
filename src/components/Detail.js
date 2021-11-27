import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';

const Detail = () => {
  const { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id);
  });

  return (
    <div className="container d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={selectedMovie.Poster} className="card-img-top" alt={selectedMovie.Title} />
      </div>
      <div className="m-4">
        <ul>
          <ol><i>Title</i> : <b>{selectedMovie.Title}</b> </ol>
          <ol><i>Year</i> : <b>{selectedMovie.Year}</b> </ol>
          <ol><i>Rated</i> : <b>{selectedMovie.Rated}</b> </ol>
          <ol><i>Released</i> : <b>{selectedMovie.Released}</b> </ol>
          <ol><i>Runtime</i> : <b>{selectedMovie.Runtime}</b> </ol>
          <ol><i>Genre</i> : <b>{selectedMovie.Genre}</b> </ol>
          <ol><i>imdbRating : <b>{selectedMovie.imdbRating}</b></i></ol>
          <ol><i>imdbVotes : <b>{selectedMovie.imdbVotes}</b></i></ol>
        </ul>
      </div>

    </div>
  );
};

export default Detail;
