
import userSignInResponse from '../../fixtures/getUserSignInResponse.json'
import userSignOutResponse from '../../fixtures/getUserSignOutResponse.json'
import { resolveWithTimeout } from "../../utils/TestUtils"
import { SignInAPIService } from "."

class SignInFixture implements SignInAPIService {
   signInAPI(request_data) {
      return resolveWithTimeout(userSignInResponse)
      // return new Promise((resolve, reject) => {
      //    resolve(userSignInResponse)
      // })
   }
   signOutAPI(request_data) {
      return resolveWithTimeout(userSignOutResponse)
   }
}
export { SignInFixture }
