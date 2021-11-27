import React, { useContext } from "react";

import { MovieContext } from "../context/MovieContext";
import MovieList from "../components/MovieList";

const Dashboard = () => {
  const {movies} = useContext(MovieContext);

  return (
    <div className="row">
      <MovieList movies={movies} />
    </div>
  )

}
export default Dashboard