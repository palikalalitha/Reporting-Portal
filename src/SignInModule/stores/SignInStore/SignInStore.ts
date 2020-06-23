import { observable, action } from 'mobx'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import {
   setAccessToken,
   clearUserSession
} from '../../../common/utils/StorageUtils.js'
import { SignInFixture } from "../../services/SignInServices/SignIn.fixture"

class SignInStore {
   @observable getUserSignInAPIStatus: number=API_INITIAL
   @observable getUserSignInAPIError:any
   @observable getUserSignOutAPIError: any
   @observable getUserSignOutAPIStatus: number=API_INITIAL
   @observable access_token: string=""
   @observable role: string=""
   authAPIService:SignInFixture
   constructor(authService) {
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
   setUserSignInAPIResponse(response:any) {
      this.access_token = response.access_token
      this.role = response.role.toLowerCase()
      setAccessToken(this.access_token)
   }

   @action.bound
   setGetUserSignInAPIError(error:number) {
      this.getUserSignInAPIError = error
   }

   @action.bound
   setGetUserSignInAPIStatus(status:number) {
      this.getUserSignInAPIStatus = status
   }

   @action.bound
   userSignOut(request_data:Object) {
      const userResponse = this.authAPIService.signOutAPI(request_data)
      return bindPromiseWithOnSuccess(userResponse)
         .to(this.setGetUserSignOutAPIStatus, response => {
            this.setUserSignOutAPIResponse(response)
         })
         .catch(error => {
            this.setGetUserSignOutAPIError(error)
            
         })
   }

   @action.bound
   setUserSignOutAPIResponse(response) {
      clearUserSession()
      this.init()
   }

   @action.bound
   setGetUserSignOutAPIError(error:number) {
      this.getUserSignOutAPIError = error
   }

   @action.bound
   setGetUserSignOutAPIStatus(status:number) {
      this.getUserSignOutAPIStatus = status
   }
}
export { SignInStore }
