import {signInRequest,signInResponse,signOutRequest} from "../../stores/SignInStore/SignInStoreTypes/types"

export interface SignInAPIService
{
    signInAPI:(request_data:signInRequest)=>Promise<signInResponse>
    signOutAPI:(reques_data:signOutRequest)=>Promise<{}>
}