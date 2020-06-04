import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { AssignedRPObservations } from '../../components/AssignedRPObservations/AssignedRPObservations'
import { RPObservations } from '../RPObservationsRoute/RPObservationsRoute'
import { ObservationList } from "../../../UserModule/components/ObservationList/ObservationList"
import { RP_HEADINGS } from "../../constants/RPPageConstants"
import { OBSERVATION_SCREEN } from "../../constants/RPRouteConstants/RPRouteConstants"

@inject('rpStore')
@observer
class RPAssignedObservationsRoute extends Component {
    role=this.props.history.location.state

   componentDidMount() {
      this.getAssignedObservations()
   }
   getAssignedObservations = () => {
      this.props.rpStore.getAssignedObservationList()
  this.props.rpStore.getObservationList();
}
   navigateToObservationScreen=(id)=>
   {
      const role=this.props.history.location.state
      this.props.history.push(`${OBSERVATION_SCREEN}/${id}`,role)
   }
   renderSuccessUI = observer(() => {
      console.log(this.role)
      const {assignedObservationList}=this.props.rpStore
      return <ObservationList roleType={this.role}
      navigateToObservationScreen={this.navigateToObservationScreen}
      observationList={assignedObservationList}/>
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
