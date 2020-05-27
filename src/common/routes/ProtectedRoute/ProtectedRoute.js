import React from "react"
import { Route } from "react-router-dom";

import { Redirect } from "react-router-dom";

import { isLoggedIn } from "../../utils/signinUtils"
import {
    SIGN_IN_PATH
}
from "../../../SignInModule/constants/RouteConstants";


export const ProtectedRoute = (props) => {
    const { component: Component, path } = props
    if (isLoggedIn()) {
        return <Route  component={Component} exact path={path} />
    }
    return <Redirect to={SIGN_IN_PATH}/>
}


























// class ProtectedRoute extends React.Component {
//     render() {
//         const { component: Component, path } = this.props;
//         if (getAccessToken()) {

//             return <Route exact path={path} component={Component}/>
//         }
//         return <Redirect to={SIGN_IN_PATH}/>
//     }
// }
//export { ProtectedRoute }
