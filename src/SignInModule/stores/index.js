
import {SignInStore} from "./SignInStore/SignInStore"
import { SignInAPI } from "../services/SignInAPI/SignIn.api"
import {SignInFixture} from "../services/SignInFixture/SignIn.fixture"
const signInService = new SignInAPI()
const signInFixture=new SignInFixture()
const signInStore = new SignInStore(signInFixture)

export
{
    signInService,signInStore
}
