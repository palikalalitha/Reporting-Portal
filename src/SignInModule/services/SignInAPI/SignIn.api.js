import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
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
      return networkCallWithApisauce(
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
