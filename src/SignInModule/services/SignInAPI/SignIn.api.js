import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

import { URL } from '../../constants/SigninPageConstants.js'

class SignInAPI {
   api
   constructor() {
      this.api = create({
         baseURL: URL
      })
   }
   signInAPI(request) {
      return networkCallWithApisauce(
         this.api,
         `/login/to/portal/v1`,
         //'/sign_in/v1/',
         request,
         apiMethods.post
      )
   }
}
export { SignInAPI }
