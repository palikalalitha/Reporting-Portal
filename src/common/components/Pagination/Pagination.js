import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { ONE } from '../../constants/ReportingPortalconstants'
import {
   PaginationContainer,
   PageNumbers,
   ArrowSymbol
} from './styledComponents'

class Pagination extends Component {
   render() {
      const {
         currentPage,
         totalPages,
         observationList,
         navigateNextPage,
         navigatePrevPage,
         totlaPages
      } = this.props
      return (
         <PaginationContainer>
            <ArrowSymbol
               isDisabled={currentPage === ONE}
               onClick={navigatePrevPage}
            >
               <FaAngleLeft />
            </ArrowSymbol>
            {observationList.map((item, index, array) => (
               <PageNumbers
                  value={index + ONE}
                  status={index + ONE === currentPage}
                  key={item.id}
               >
                  {index + ONE}{' '}
               </PageNumbers>
            ))}
            <ArrowSymbol
               isDisabled={currentPage === totlaPages}
               onClick={navigateNextPage}
            >
               <FaAngleRight />
            </ArrowSymbol>
         </PaginationContainer>
      )
   }
}

export default Pagination
