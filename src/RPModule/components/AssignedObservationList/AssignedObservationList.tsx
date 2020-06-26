import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Table } from '../../../common/components/Table/Table'

import NoObservations from '../../../UserModule/components/NoObservations/NoObservations'
import { ObservationContainer } from '../../../UserModule/styleGuide/typos'

import { RP_HEADINGS } from '../../../common/constants/reportingPortalconstants'
import ReactPagination from '../../../common/components/ReactPagination/ReactPagination'
import {RPObservationObject} from "../../stores/types"
import { RPModel } from "../../stores/Models/RPModel"

interface AssignedObservationListProps
{
   roleType:string
   navigateToObservationScreen:(id: number)=>void
   totlaPages:number
   handlePage:(page: { selected: any })=>void
   observationList:Array<RPModel>
   date_type:string
   sort_type:string
  
   gotoObservationList:()=>void
   selectedPage:number
   gotoUserForm:()=>void
   observationsSort:(date_type: string)=>void

    // filterByStatus,  
   
}
@observer
class AssignedObservationList extends Component<AssignedObservationListProps> {
   render() {
      const {
         observationList,
         totlaPages,
         handlePage,
         gotoObservationList,
         selectedPage,
         gotoUserForm,
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
               />
            )}
         </ObservationContainer>
      )
   }
}

export { AssignedObservationList }
