import { SignInStore } from './SignInStore/SignInStore'

import { SignInFixture } from '../services/SignInServices/SignIn.fixture'

import { SignInAPI } from '../services/SignInServices/SignIn.api'
const signInService = new SignInAPI()

const signInFixture = new SignInFixture()
const signInStore = new SignInStore(signInFixture)

export { signInService, signInStore }
