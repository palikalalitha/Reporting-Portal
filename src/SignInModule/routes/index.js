import React from 'react'

import { Route } from 'react-router-dom'

import { SIGN_IN_PATH } from '../constants/RouteConstants'

import { isLoggedIn } from "../../common/utils/signinUtils"

import { SignInRoute } from './SignInRoute'

const routes =[<Route exact path={SIGN_IN_PATH} component={SignInRoute} />]

export default routes
