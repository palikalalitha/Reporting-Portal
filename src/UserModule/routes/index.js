import React from "react"

import {
    USER_PATH
}
from "../constants/RouteConstants"

import { ProtectedRoute } from "../../common/routes/ProtectedRoute/ProtectedRoute"
import { UserRoute } from "./UserRoute"

const routes = [
    <ProtectedRoute  path={USER_PATH} component = {UserRoute}/>
];

export default routes
