import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const YearFilter = (props) => {

  const [startDate, setStartDate] = useState(false);

  function handleDateChange(date) {
    setStartDate(date)
    props.setYearFilterValue(date.getFullYear())
  };

  return (
    <div className="col col-sm-6 d-flex justify-content-end">
      <label>Filter By Year</label>
      <div className="col col-sm-6">
        <DatePicker
          onChange={handleDateChange}
          selected={startDate}
          showYearPicker
          dateFormat="yyyy"
          placeholderText="Year"
        />
      </div>
    </div>
  )

}

export default YearFilter;