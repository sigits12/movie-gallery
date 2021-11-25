import React from "react";

const SearchBox = (props) => {

  let timeout = null;

  function handleChange(event) {
    clearTimeout(timeout);

    timeout = setTimeout(function () {

      props.setSearchValue(event.target.value)

    }, 1000);
  }

  return (
    <div className="col col-sm-4">
      <input 
        className="form-control" 
        placeholder="Search" 
        value={props.value}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBox;