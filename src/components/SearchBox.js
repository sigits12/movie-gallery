import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const SearchBox = (props) => {

  const { movies } = useContext(MovieContext);

  const [suggestion, setSuggestion] = useState('')
  let timeout = null;

  function handleChange(event) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      setSuggestion(event.target.value)
      props.setSearchValue(event.target.value)
    }, 300);
  }

  return (
    <div className="col col-sm-3">
      <input
        className="form-control"
        placeholder="Search"
        value={props.value}
        onChange={handleChange}
        type="text"
      />
      <div>
        {suggestion.length !== 0 && (
          <div className="bg-white border overflow-visible">
            {movies.filter((movie) => {
              if (suggestion === "") {
                return movie;
              } else if (
                movie.title.toLowerCase().includes(suggestion.toLowerCase())
              ) {
                return movie
              }
              return null;
            }).sort().map((movie, index) => (
              <Link
                to={`detail/${movie.id}`}
                className='link-secondary'
                key={index}
              >
                {/* <div className="p-2"> */}
                  <p className="mb-2">{movie.title}</p>
                {/* </div> */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBox;