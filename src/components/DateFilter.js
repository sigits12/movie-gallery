import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = (props) => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="col col-sm-4">
      <DatePicker 
        dateFormat="dd/MM/yyyy"
        selected={startDate} 
        onChange={(date) => setStartDate(date)} />
    </div>
  )

}

export default DateFilter;