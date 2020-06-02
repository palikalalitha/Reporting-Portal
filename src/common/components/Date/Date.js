import React from "react"
import DatePicker from "react-datepicker";
import styled from "./Date.css"
class Date extends React.Component
{
    render()
    {
        const {roleType,startDate,handleChange}=this.props
        return(
            <DatePicker
            // showTimeSelect
            dateFormat="dd/MM/yyyy h:mm aa"
        selected={startDate}
        disabled={roleType}
        onChange={handleChange}
        className={'date-container'}
      />
              
        )
    }
}
export {Date}