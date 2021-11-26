import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import DateFilter from "./components/DateFilter";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [dateFilterValue, setDateFilterValue] = useState('');

  const getMoviesRequest = async (searchValue) => {
    
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=867b0ad3`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {setMovies(responseJson.Search);}
  }

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-list">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <DateFilter dateFilterValue={dateFilterValue} setDateFilterValue={setDateFilterValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;