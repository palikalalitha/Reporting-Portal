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
import { RPRoute } from './RPRoute/RPRoute'
import { ProtectedRoute } from '../../common/routes/ProtectedRoute/ProtectedRoute'

const routes = [
   <ProtectedRoute path={RP_PATH} component={RPRoute} />,
   <ProtectedRoute path={Assigned_OBSERVATIONS_PATH} component={RPRoute} />
   // <ProtectedRoute path={OBSERVATION_LIST} component={RPObservationsRoute} />,
   // <ProtectedRoute path={RP_CREATION_FORM} component={UserFormRoute} />,
   //  <ProtectedRoute path={OBSERVATION_SCREEN} component={ObservationScreenRoute} />
]

export default routes
