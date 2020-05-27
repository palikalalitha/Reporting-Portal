import {SignInStore} from "./SignInStore/"
import { SignInAPI } from "../services/SignInAPI/SignInAPI"
const signInService = new SignInAPI()
const signInStore = new SignInStore(signInService)

export{signInService,signInStore}
