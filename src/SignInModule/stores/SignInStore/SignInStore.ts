import { observable, action } from 'mobx'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import {
   setAccessToken,
   clearUserSession
} from '../../../common/utils/StorageUtils.js'
import { SignInFixture } from "../../services/SignInServices/SignIn.fixture"

class SignInStore {
   authAPIService:SignInFixture

   @observable getUserSignInAPIStatus!:APIStatus
   @observable getUserSignInAPIError!:Error|null
   
   @observable getUserSignOutAPIError!:Error|null
   @observable getUserSignOutAPIStatus!:APIStatus

   @observable access_token!: string
   @observable role!:string
  

   constructor(authService:SignInFixture) {
      this.authAPIService = authService
      this.init()
   }
   init() {
      this.getUserSignInAPIStatus= API_INITIAL
      this.getUserSignInAPIError = null

      this.getUserSignOutAPIError = null
      this.getUserSignOutAPIStatus = API_INITIAL
      this.access_token = ''
      this.role = ''
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
   userSignIn(request_data,onSuccess,onFailure) {
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
   setUserSignOutAPIResponse(response) {
      clearUserSession()
      this.init()
   }

   @action.bound
   setGetUserSignOutAPIError(error) {
      this.getUserSignOutAPIError = error
   }

   @action.bound
   setGetUserSignOutAPIStatus(status) {
      this.getUserSignOutAPIStatus = status
   }

   @action.bound
   userSignOut(request_data) {
      const userResponse = this.authAPIService.signOutAPI(request_data)
      return bindPromiseWithOnSuccess(userResponse)
         .to(this.setGetUserSignOutAPIStatus, response => {
            this.setUserSignOutAPIResponse(response)
         })
         .catch(error => {
            this.setGetUserSignOutAPIError(error)
            
         })
   }

}
export { SignInStore }
