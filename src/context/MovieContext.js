import React, { createContext, useState, useEffect } from 'react';
export const MovieContext = createContext();

const API_KEY = '867b0ad3'; // OMDb API Key

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  const fetchMovies = async (searchValue, yearFilter) => {
    const url = 'http://www.omdbapi.com/?';
    let params = {apikey: API_KEY}
    if (searchValue) {
      params.s = searchValue
    }
    if (yearFilter) {
      params.y = yearFilter
    }
    const response = await fetch(url + new URLSearchParams(params));

    const responseJson = await response.json();
    if (responseJson.Search) { 
      setMovies(responseJson.Search);
    } else {
      setMovies([]); 
    }
  };

  const showDetail = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) { setSelectedMovie(responseJson); }
  };

  useEffect(() => {
    fetchMovies(search, yearFilter);
  }, [search, yearFilter]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        movies,
        showDetail,
        selectedMovie,
        setYearFilter,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
