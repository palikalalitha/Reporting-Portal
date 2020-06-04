import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { AssignedRPObservations } from '../../components/AssignedRPObservations/AssignedRPObservations'
import { RPObservations } from '../RPObservationsRoute/RPObservationsRoute'
import { ObservationList } from '../../../UserModule/components/ObservationList/ObservationList'
import { RP_HEADINGS } from '../../constants/RPPageConstants'
import { OBSERVATION_SCREEN } from '../../constants/RPRouteConstants/RPRouteConstants'

@inject('rpStore')
@observer
class RPAssignedObservationsRoute extends Component {
   role = this.props.history.location.state
   componentDidMount() {
      this.getAssignedObservations()
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
      const { assignedObservationList,sortBytDate,offset,currentPage,totlaPages,date_type,selectedPage,sort_type,handlePage } = this.props.rpStore
      return (
         <ObservationList
            roleType={this.role}
            navigateToObservationScreen={this.navigateToObservationScreen}
            sortBytDate={sortBytDate}
            currentPage={currentPage}
            totlaPages={totlaPages}
            offset={offset}
            handlePage={handlePage}
            date_type={date_type}
            sort_type={sort_type}
            selectedPage={selectedPage}
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
      return (
         <AssignedRPObservations
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

export { RPAssignedObservationsRoute }
