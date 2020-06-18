import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { RPPage } from '../../components/RPPage/RPPage'
import { RPObservations } from '../RPObservationsRoute/RPObservationsRoute'
import { ObservationList } from '../../../UserModule/components/ObservationList/ObservationList'
import { RP_HEADINGS } from '../../constants/RPPageConstants'
import { OBSERVATION_SCREEN } from '../../constants/RPRouteConstants/RPRouteConstants'
import { AssignedObservationList } from '../../components/AssignedObservationList/AssignedObservationList'

@inject('rpStore')
@observer
class RPRoute extends Component {
   role
   componentDidMount() {
      this.getAssignedObservations()
      this.role = this.props.history.location.state
   }
   getAssignedObservations = () => {
      this.props.rpStore.getAssignedObservationList()
   }
   navigateToObservationScreen = id => {
      const role = this.props.history.location.state
      this.props.rpStore.getObservationDetailsById(id)
      this.props.history.push(`${OBSERVATION_SCREEN}/${id}`, role)
   }
   renderSuccessUI = observer(() => {
      const {
         assignedObservationList,
         sortBytDate,
         rpSelectedPage,
         rpCurrentPage,
         rpTotalPage,
         rpOffset,
         offset,
         currentPage,
         totlaPages,
         date_type,
         selectedPage,
         sort_type,
         handlePage
      } = this.props.rpStore
      return (
         <AssignedObservationList
            roleType={this.role}
            navigateToObservationScreen={this.navigateToObservationScreen}
            sortBytDate={sortBytDate}
            currentPage={rpCurrentPage}
            totlaPages={rpTotalPage}
            offset={rpOffset}
            handlePage={handlePage}
            date_type={date_type}
            sort_type={sort_type}
            selectedPage={rpSelectedPage}
            observationList={assignedObservationList}
         />
      )
   })
   render() {
      const {
         getAssignedObservationListAPIStatus,
         getAssignedObservationListAPIError,
         assignedObservationList
      } = this.props.rpStore
      console.log('fgi')
      return (
         <RPPage
            roleType={this.role}
            navigateToObservationScreen={this.navigateToObservationScreen}
            observationList={assignedObservationList}
            apiStatus={getAssignedObservationListAPIStatus}
            apiError={getAssignedObservationListAPIError}
            doNetworkCalls={this.getAssignedObservations}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}

export { RPRoute }
