import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {Table} from '../../../common/components/Table/Table'
import NoObservations from '../NoObservations/NoObservations'
import { ObservationContainer } from '../../styleGuide/typos'
import './pagination.css'
import {
   USER_HEADINGS
} from '../../constants/userPageConstants'
import ReactPagination from '../../../common/components/ReactPagination/ReactPagination'

interface ObservationListProps
{
  
   gotoUserForm:()=>void
   filterByStatus: (option: { value: any }[] | null)=>void
   observationsSort: (date_type: string)=>void
   handlePage:(page: { selected: any })=>void
   gotoObservationList:()=>void
   getObservationDetailsById: (id: number)=>void
   navigateToObservationScreen:(id: number)=>void

   observationList:Array<Object>
   singleObservationDetails:Array<Object>
   selectedPage:number
   roleType:string
   date_type:string
   sort_type:string
   totlaPages:number

}
@observer
class ObservationList extends Component<ObservationListProps>{
   render() {
      const {
         observationList,
         gotoUserForm,
         totlaPages,
         handlePage,
         selectedPage,
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
                
               />
            )}
         </ObservationContainer>
      )
   }
}

export { ObservationList }
