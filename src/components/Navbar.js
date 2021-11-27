import React, { useContext } from "react";
import { MovieContext } from '../context/MovieContext';

import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import YearFilter from "./YearFilter";

const Navbar = () => {
  const { setSearch, setYearFilter} = useContext(MovieContext);

  return (
    <>
      <MovieListHeading heading="Movies" />
      <SearchBox setSearchValue={setSearch} />
      <YearFilter setYearFilterValue={setYearFilter} />
    </>
  )

}

export default Navbar;
