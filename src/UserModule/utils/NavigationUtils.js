import {
   USER_CREATION_FORM,
   OBSERVATION_SCREEN
} from '../../UserModule/constants/RouteConstants.js'
import { SIGN_IN_PATH } from '../../SignInModule/constants/RouteConstants.js'

export const gotoObservationCreationForm = history => {
   history.push(USER_CREATION_FORM)
}
export const gotoObservationDetails = (history, id, roleType) => {
   history.push(`${OBSERVATION_SCREEN}/${id}`, roleType)
}

export const gotoSignInPage = histroy => {
   history.replace(SIGN_IN_PATH)
}

export const gotoPreviousPage = history => {
   history.goBack()
}
