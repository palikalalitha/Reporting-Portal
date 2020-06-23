
import userSignInResponse from '../../fixtures/getUserSignInResponse.json'
import userSignOutResponse from '../../fixtures/getUserSignOutResponse.json'

class SignInFixture {
   signInAPI(request:Object) {
      return new Promise((resolve, reject) => {
         resolve(userSignInResponse)
      })
   }
   signOutAPI(request:Object) {
      return new Promise((resolve, reject) => {
         resolve(userSignOutResponse)
      })
   }
}
export { SignInFixture }
