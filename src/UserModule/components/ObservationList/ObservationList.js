import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ReactPaginate from 'react-paginate'
import Select from 'react-select'
import Table from '../../../common/components/Table/Table'
import { TableData } from '../../../common/components/TableData/TableData'
import strings from '../../i18n/strings.json'
import NoObservations from '../NoObservations/NoObservations'
import { ObservationContainer } from '../../styleGuide/typos'
import paginationCss from './pagination.css'
import Navbar from '../../../common/components/Navbar/Navbar'
import {
   USER_HEADINGS,
   OBSERVATIONLIST
} from '../../constants/userPageConstants'

@observer
class ObservationList extends Component {
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
                  <Table {...this.props} observationList={observationList} />
                  <ReactPaginate
                     previousLabel={'<'}
                     nextLabel={'>'}
                     breakLabel={'...'}
                     breakClassName={'break-me'}
                     breakLinkClassName={'breakLinkClassName'}
                     pageCount={totlaPages}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={1}
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

export { ObservationList }
