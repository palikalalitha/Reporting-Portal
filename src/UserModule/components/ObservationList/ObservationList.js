import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ReactPaginate from 'react-paginate'

import Table from '../../../common/components/Table/Table'
import { TableData } from '../../../common/components/TableData/TableData'
import strings from '../../i18n/strings.json'
import NoObservations from '../NoObservations/NoObservations'
import { ObservationContainer } from '../../styleGuide/typos'
import paginationCss from './pagination.css'
import Navbar from "../../../common/components/Navbar/Navbar"
import { HEADINGS } from "../../constants/userPageConstants"

class ObservationList extends Component {
   static defaultProps={
      observationList:[{
         "id": "1",
         "title": "Learning deviations",
         "priority": "HIGH",
         "description": "It is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or other type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection",
         "category": "category 1",
         "sub_category": "sub_category 1",
         "due_date": "11/5/2020",
         "status": "Action in progress",
         "assigned_to": {
           "name": "lalitha",
           "phno": 913456788
         }
      }]
   }
   render() {
   
      const { headings } = strings
      const {
         observationList,
         gotoUserForm,
         totlaPages,
         handlePage,
         gotoObservationList,
         selectedPage,
        
      } = this.props

      return (
         <ObservationContainer>
            {observationList.length > 0 ? (
               <>
                  <Table
                     {...this.props}
                     headings={HEADINGS}
                     observationList={observationList}
                  />
                  <ReactPaginate
                     previousLabel={'<'}
                     nextLabel={'>'}
                     breakLabel={'...'}
                     breakClassName={'break-me'}
                     breakLinkClassName={'breakLinkClassName'}
                     pageCount={totlaPages}
                     marginPagesDisplayed={2}
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

export { ObservationList }
