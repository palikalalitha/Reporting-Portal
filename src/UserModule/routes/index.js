import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
   USER_PATH,
   USER_CREATION_FORM,
   OBSERVATION_SCREEN
} from '../constants/RouteConstants'

import { ProtectedRoute } from '../../common/routes/ProtectedRoute/ProtectedRoute'
import { UserRoute } from './UserRoute'
import UserFormRoute from './UserFormRoute/UserFormRoute'
import ObservationScreenRoute from './ObservationScreenRoute/'

const routes = [
   <ProtectedRoute path={USER_PATH} component={UserRoute} />,
   <Route path={USER_CREATION_FORM} component={UserFormRoute} />,
   <Route path={OBSERVATION_SCREEN} component={ObservationScreenRoute} />
]

export default routes
