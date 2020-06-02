import { create } from "apisauce";

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { networkCallWithApisauce } from "../../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants"
import userResponse from "../../fixtures/getUserSignInResponse.json"
class SignInFixture {

    signInAPI() {
        return new Promise((resolve, reject) => {
            resolve(userResponse)
        })

    }
}
export { SignInFixture}
