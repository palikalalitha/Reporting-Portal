import { observable, action } from "mobx"

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"

import { setAccessToken, clearUserSession } from "../../../common/utils/StorageUtils.js"
class SignInStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable access_token
    @observable role
    authAPIService
    constructor(authService) {
        this.authAPIService = authService
        this.init()
    }
    init() {
        this.getUserSignInAPIStatus = API_INITIAL
        this.getUserSignInAPIError = null
    }

    @action.bound
    userSignIn(requestObject, onSuccess, onFailure) {
        const userResponse = this.authAPIService.signInAPI(requestObject)
        return bindPromiseWithOnSuccess(userResponse)
            .to(this.setGetUserSignInAPIStatus, response => {
                this.setUserSignInAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setGetUserSignInAPIError(error);
                onFailure();
            })
    }

    @action.bound
    setUserSignInAPIResponse(response) {
        let token = response.map(eachItem => eachItem.access_token);
        let role=response[0].role
        this.role=role
        this.access_token=token
        setAccessToken(token)
    }

    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error
    }

    @action.bound
    setGetUserSignInAPIStatus(status) {
        this.getUserSignInAPIStatus = status
    }

    @action.bound
    userSignOut() {
        clearUserSession()
        this.init();
    }
}
export {SignInStore}
