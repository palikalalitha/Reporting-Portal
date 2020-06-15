import { create } from 'apisauce'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'
import userSignInResponse from '../../fixtures/getUserSignInResponse.json'
import userSignOutResponse from '../../fixtures/getUserSignOutResponse.json'
class SignInFixture {
   signInAPI(request) {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(userSignInResponse, request), 2000)
      })
   }
   signOutAPI(request) {
      return new Promise((resolve, reject) => {
         resolve(userSignOutResponse, request)
      })
   }
}
export { SignInFixture }
