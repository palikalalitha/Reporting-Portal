import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ReactPaginate from 'react-paginate'
import Select from 'react-select'
import { Table } from '../../../common/components/Table/Table'
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
import ReactPagination from '../../../common/components/ReactPagination/ReactPagination'

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
                  <Table
                     tableHeadings={USER_HEADINGS}
                     {...this.props}
                     observationList={observationList}
                  />
                  <ReactPagination
                     totlaPages={totlaPages}
                     handlePage={handlePage}
                     selectedPage={selectedPage}
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
