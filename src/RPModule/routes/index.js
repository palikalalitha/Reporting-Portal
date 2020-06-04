import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
   RP_PATH,
   RP_CREATION_FORM,
   OBSERVATION_SCREEN,
   Assigned_OBSERVATIONS_PATH,
   OBSERVATION_LIST
} from '../constants/RPRouteConstants/RPRouteConstants'
import UserFormRoute from '../../UserModule/routes/UserFormRoute/UserFormRoute'
import ObservationScreenRoute from './ObservationScreenRoute/ObservationScreenRoute'
import RPObservationsRoute from './RPObservationsRoute/RPObservationsRoute'
import { RPAssignedObservationsRoute } from './RPAssignedObservationsRoute/RPAssignedObservationsRoute'

const routes = [
   <Route path={RP_PATH} component={RPAssignedObservationsRoute} />,
   <Route
      path={Assigned_OBSERVATIONS_PATH}
      component={RPAssignedObservationsRoute}/>,
   <Route path={OBSERVATION_LIST} component={RPObservationsRoute} />,
   <Route path={RP_CREATION_FORM} component={UserFormRoute} />,
   <Route path={OBSERVATION_SCREEN} component={ObservationScreenRoute} />
]

export default routes
