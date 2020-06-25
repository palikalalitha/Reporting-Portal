import { create } from 'apisauce'
import { apiMethods } from '../../../constants/APIConstants'
import { URL } from '../../../common/constants/reportingPortalconstants.js'


import { networkCallWithApisauceWithAccessToken } from '../../utils/AuthUtils'
import { networkCallWithApisauce } from "../../utils/APIUtils"

import endpoints from "../endPoints"
import {SignInAPIService} from "./index"



class SignInAPI implements SignInAPIService {
   api:Record<string,any>
   constructor() {
      this.api = create({
         baseURL: URL
      })
   }
   signInAPI(request_data) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         endpoints.signIn.login,
         request_data,
         apiMethods.post
      )
   }
   signOutAPI(request_data) {
      return networkCallWithApisauce(
         this.api,
         endpoints.signIn.logout,
         request_data,
         apiMethods.post
      )
   }
}
export { SignInAPI }
