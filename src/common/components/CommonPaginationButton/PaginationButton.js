import React, { Component } from 'react'
import { PaginationButtons, PaginationArrows } from './styledComponents'
import { FaGreaterThan } from 'react-icons/fa'
import { FaAngleLeft } from 'react-icons/fa'

class PaginationButton extends Component {
   render() {
      const { isDisabled, arrowSymbol, pageHandler } = this.props
      return (
         <PaginationButtons isDisabled={isDisabled} onClick={pageHandler}>
            <arrowSymbol />
         </PaginationButtons>
      )
   }
}

export default PaginationButton
