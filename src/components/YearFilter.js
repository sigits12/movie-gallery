import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const YearFilter = (props) => {

  const [startDate, setStartDate] = useState(false);

  function handleDateChange (date) {
    setStartDate(date)
    props.setYearFilterValue(date.getFullYear())
  };
  
  return (
    <div className="col col-sm-5 d-flex align-items-center">
      <div className="m-2">Filter By Year</div>
      <DatePicker
        onChange={handleDateChange}
        selected={startDate}
        showYearPicker
        dateFormat="yyyy"
        placeholderText="Year"
      />
    </div>
  )

}

export default YearFilter;