import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";

import {AssignedRPObservations} from "../../components/AssignedRPObservations/AssignedRPObservations";
import {RPObservations} from "../RPObservationsRoute/RPObservationsRoute"
@inject("rpStore")
@observer

class RPAssignedObservationsRoute extends Component {
    componentDidMount() {
       this.getAssignedObservations()
     }
     getAssignedObservations = () => {
       this.props.rpStore.getAssignedObservationList()
     }
    renderSuccessUI = observer(() => {
        return (
          <div>hiii</div>
        )
    })
    render() {
        const {
          getAssignedObservationListAPIStatus,
          getAssignedObservationListAPIError,
          assignedObservationList
         } =this.props.rpStore

         console.log(this.props.rpStore)
     return (
            <AssignedRPObservations
            observationList={assignedObservationList}
            apiStatus={getAssignedObservationListAPIStatus}
            apiError={getAssignedObservationListAPIError}
            doNetworkCalls={this.getAssignedObservations}
            renderSuccessUI={this.renderSuccessUI}
             />
        );
    }
}

export{RPAssignedObservationsRoute};