import { create } from 'apisauce'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'
import userResponse from '../../fixtures/getUserSignInResponse.json'
class SignInFixture {
   signInAPI(request) {
      return new Promise((resolve, reject) => {
         resolve(userResponse,request)
      })
   }
}
export { SignInFixture }
