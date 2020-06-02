import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"
import { apiMethods } from "../../../constants/APIConstants"

import { URL } from "../../constants/SigninPageConstants.js"

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
            "v1/signin/",request,
            apiMethods.get

        );
    }
}
export { SignInAPI};
