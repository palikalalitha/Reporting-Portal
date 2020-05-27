import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"
import { apiMethods } from "../../../constants/APIConstants"

import { URL } from "../../constants/SignInPageConstants.js"
import endPoints from "../endPoints.js"

class SignInAPI {
    api
    constructor() {

        this.api = create({
            baseURL: URL
        });
    }
    signInAPI(request) {
        return networkCallWithApisauce(
            this.api,
            endPoints.signInEndPoint, request,
            apiMethods.get

        );
    }
}
export { SignInAPI};
