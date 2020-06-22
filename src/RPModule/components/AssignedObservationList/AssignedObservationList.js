import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {Table} from '../../../common/components/Table/Table'

import NoObservations from '../../../UserModule/components/NoObservations/NoObservations'
import { ObservationContainer } from '../../../UserModule/styleGuide/typos'

import { RP_HEADINGS } from '../../../common/constants/reportingPortalconstants'
import ReactPagination from '../../../common/components/ReactPagination/ReactPagination'

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
                  <Table
                     tableHeadings={RP_HEADINGS}
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

export { AssignedObservationList }
