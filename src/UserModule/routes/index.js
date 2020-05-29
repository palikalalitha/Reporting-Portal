import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
    USER_PATH,USER_CREATION_FORM
}
from "../constants/RouteConstants"

import { ProtectedRoute } from "../../common/routes/ProtectedRoute/ProtectedRoute"
import { UserRoute } from "./UserRoute"
import UserFormRoute from "./UserFormRoute/UserFormRoute"

const routes = [
    <ProtectedRoute  path={USER_PATH} component = {UserRoute}/>,
    <Route path={USER_CREATION_FORM} component={UserFormRoute} />
];

export default routes
