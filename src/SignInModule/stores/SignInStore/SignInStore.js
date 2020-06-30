import { observable, action } from 'mobx'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import {
   setAccessToken,
   clearUserSession
} from '../../../common/utils/StorageUtils.js'

class SignInStore {
   @observable getUserSignInAPIStatus
   @observable getUserSignInAPIError
   @observable getUserSignOutAPIError
   @observable getUserSignOutAPIStatus
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

      this.getUserSignOutAPIError = null
      this.getUserSignOutAPIStatus = API_INITIAL
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
      console.log(response)  
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
   userSignOut(request_data, onSuccess, onFailure) {
      const userResponse = this.authAPIService.signOutAPI(request_data)
      return bindPromiseWithOnSuccess(userResponse)
         .to(this.setGetUserSignOutAPIStatus, response => {
            this.setUserSignOutAPIResponse(response)
            // onSuccess()
         })
         .catch(error => {
            this.setGetUserSignOutAPIError(error)
            // onFailure()
         })
   }

   @action.bound
   setUserSignOutAPIResponse(response) {
      clearUserSession(response)
      this.init()
      // this.access_token = response.access_token
      // this.role = response.role.toLowerCase()
      // setAccessToken(this.access_token)
   }

   @action.bound
   setGetUserSignOutAPIError(error) {
      this.getUserSignOutAPIError = error
   }

   @action.bound
   setGetUserSignOutAPIStatus(status) {
      this.getUserSignOutAPIStatus = status
   }
}
export { SignInStore }
