import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
   USER_PATH,
   USER_CREATION_FORM,
   OBSERVATION_SCREEN,
   OBSERVATION_LIST
} from '../constants/RouteConstants'

import ProtectedRoute from '../../common/routes/ProtectedRoute/ProtectedRoute'
import { UserRoute } from './UserRoute'
import UserFormRoute from './UserFormRoute/UserFormRoute'
import ObservationScreenRoute from '../../RPModule/routes/ObservationScreenRoute/ObservationScreenRoute'

const routes = [
   <ProtectedRoute path={USER_PATH} component={UserRoute} />,
   <ProtectedRoute path={USER_CREATION_FORM} component={UserFormRoute} />,
   <Route path={OBSERVATION_SCREEN} component={ObservationScreenRoute} />
]

export default routes
