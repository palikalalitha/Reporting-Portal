import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ReactPaginate from 'react-paginate'
import Select from 'react-select'
import Table from '../../../common/components/Table/Table'
import { TableData } from '../../../common/components/TableData/TableData'

import NoObservations from '../../../UserModule/components/NoObservations/NoObservations'
import { ObservationContainer } from '../../../UserModule/styleGuide/typos'
import paginationCss from './pagination.css'
import Navbar from '../../../common/components/Navbar/Navbar'
import { RP_HEADINGS } from "../../../common/constants/ReportingPortalconstants"

@observer
class AssignedObservationList extends Component {
   render() {
      const {
         observationList,
         gotoUserForm,
         filterByStatus,
         totlaPages,
         handlePage,
         gotoObservationList,
         selectedPage,
         roleType
      } = this.props
      return (
         <ObservationContainer>
            {observationList.length > 0 ? (
               <>
                  <Table tableHeadings={RP_HEADINGS} {...this.props} observationList={observationList} />
                  <ReactPaginate
                     previousLabel={'<'}
                     nextLabel={'>'}
                     breakLabel={'...'}
                     breakClassName={'break-me'}
                     breakLinkClassName={'breakLinkClassName'}
                     pageCount={totlaPages}
                     marginPagesDisplayed={5}
                     pageRangeDisplayed={2}
                     onPageChange={handlePage}
                     containerClassName={'page-container'}
                     pageClassName={'page-box'}
                     activeClassName={'active-page'}
                     previousClassName={'prev'}
                     nextClassName={'prev'}
                     forcePage={selectedPage}
                  />
               </>
            ) : (
               <NoObservations
                  gotoUserForm={gotoUserForm}
                  gotoObservationList={gotoObservationList}
               />
            )}
         </ObservationContainer>
      )
   }
}

export { AssignedObservationList }
