import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

// import { URL } from '../../constants/SigninPageConstants.js'
import {URL} from "../../../common/constants/ReportingPortalconstants"
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
}
export { SignInAPI }
