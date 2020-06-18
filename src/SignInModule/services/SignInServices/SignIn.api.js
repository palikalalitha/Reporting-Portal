import { create } from 'apisauce'
import { networkCallWithApisauceWithAccessToken } from '../../utils/AuthUtils'
import { apiMethods } from '../../../constants/APIConstants'
import { URL } from '../../../common/constants/ReportingPortalconstants.js'
class SignInAPI {
   api
   constructor() {
      this.api = create({
         baseURL: URL
      })
   }
   signInAPI(request_data) {
      return networkCallWithApisauceWithAccessToken(
         this.api,
         `/login/to/portal/v1/`,
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
