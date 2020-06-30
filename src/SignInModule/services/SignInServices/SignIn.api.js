import { create } from 'apisauce'
import { networkCallWithApisauceWithAccessToken } from '../../utils/AuthUtils'
import { apiMethods } from '../../../constants/APIConstants'
//import { BASE_URL } from '../../../common/constants/reportingPortalconstants.js'
import BASE_URL from "../../../common/constants/EnvirnomentalConsants"
class SignInAPI {
   api
   constructor() {
      this.api = create({
         baseURL: BASE_URL
      })
   }
   signInAPI(request_data) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         "signin",
         //    `/login/to/portal/v1/`,
         request_data,
         apiMethods.post
      )
   }
   signOutAPI(request) {
      return networkCallWithApisauce(
         this.api,
         `/logout/to/portal/v1/`,
         request_data,
         apiMethods.post
      )
   }
}
export { SignInAPI }
