import React, { createContext, useState, useEffect } from 'react';
export const MovieContext = createContext();

const API_KEY = 'd212dc1bfc2d8009f736f68f2e71938f'; // OMDb API Key

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  let url = 'https://api.themoviedb.org/3';

  const fetchMovies = async (searchValue, yearFilter) => {
    let params = { api_key: API_KEY }

    if (searchValue || yearFilter) {
      if (searchValue) {
        url = url + '/search/movie'
        params.query = searchValue
        params.primary_release_year = yearFilter
      }

      if (yearFilter && !searchValue) {
        url = url + '/discover/movie'
        params.primary_release_year = yearFilter
      }
    } else {
      url = url + '/movie/top_rated'
    }

    const response = await fetch(url + '?' + new URLSearchParams(params));

    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
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
