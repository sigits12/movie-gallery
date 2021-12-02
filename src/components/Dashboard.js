import React, { useContext } from "react";

import { MovieContext } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import SearchBox from "./SearchBox";
import YearFilter from "./YearFilter";
import '../styles/Dashboard.css';


const Dashboard = () => {
  const { setSearch, movies, setYearFilter } = useContext(MovieContext);

  return (
    <div className="row">
      <div className="filter d-flex mb-5">
        <SearchBox setSearchValue={setSearch} />
        <YearFilter setYearFilterValue={setYearFilter} />
      </div>
      <MovieList movies={movies} />
    </div>
  )

}
export default Dashboard