import React from "react";
import { Link } from "react-router-dom";

const MovieListHeading = (props) => {
  return (
    <div className="col col-sm-4">
      <h1><Link
        to={`/`}
      >{props.heading}</Link></h1>

    </div>
  )
}

export default MovieListHeading