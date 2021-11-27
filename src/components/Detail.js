import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';

const Detail = () => {
  const { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id);
  }, [id]);

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={selectedMovie.Poster} class="card-img-top" alt={selectedMovie.Title} />
      <div class="card-body">
        <p class="card-text">{selectedMovie.Title} - {selectedMovie.Year}</p>
      </div>
    </div>
  );
};

export default Detail;
