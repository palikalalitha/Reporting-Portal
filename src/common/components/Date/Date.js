import React from 'react'
import DatePicker from 'react-datepicker'
import styled from './Date.css'
class Date extends React.Component {
   render() {
      const { roleType, startDate, handleChange, text } = this.props
      console.log(startDate)
      return (
         <DatePicker
            // showTimeSelect
            placeholderText={text}
            dateFormat='dd/MM/yyyy h:mm aa'
            selected={startDate}
            disabled={roleType === 'user' ? true : false}
            onChange={handleChange}
            className={'date-container'}
         />
      )
   }
}
export { Date }
