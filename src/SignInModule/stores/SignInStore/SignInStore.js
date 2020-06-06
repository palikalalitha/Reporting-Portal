import { observable, action } from 'mobx'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import {
   setAccessToken,
   clearUserSession
} from '../../../common/utils/StorageUtils.js'
import { SIGN_IN_PATH } from "../../constants/RouteConstants.js"

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
      this.access_token = ''
      this.role = ''
   }

   @action.bound
   userSignIn(request_data, onSuccess, onFailure) {
      const userResponse = this.authAPIService.signInAPI(request_data)
      return bindPromiseWithOnSuccess(userResponse)
         .to(this.setGetUserSignInAPIStatus, response => {
            this.setUserSignInAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setGetUserSignInAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setUserSignInAPIResponse(response) {
      this.access_token = response.access_token
      this.role = response.role.toLowerCase()
      setAccessToken(this.access_token)
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
      this.init()
   }
}
export { SignInStore }
