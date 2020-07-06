import React, { lazy } from 'react'

import { Route } from 'react-router-dom'

import { SIGN_IN_PATH } from '../constants/RouteConstants'

// import { SignInRoute } from './SignInRoute'

const SignInRoute = lazy(() => import('./SignInRoute/SignInRoute'))
let id = 0
const signInRoutes = [
   <Route key={id} exact path={SIGN_IN_PATH} component={SignInRoute} />
]

export default signInRoutes
