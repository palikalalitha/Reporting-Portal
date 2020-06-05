import React, { Component } from 'react'
import RPObservations from '../../components/RPObservations/RPObservations'
import { observer } from "mobx-react"

@observer
class RPObservationsRoute extends Component {
   render() {
      return <RPObservations />
   }
}

export default RPObservationsRoute
