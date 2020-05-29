import { create } from "apisauce";

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { networkCallWithApisauce } from "../../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants"
import observationList from "../../fixtures/getObservationList.json"
class UserService {

    getUsersResponse() {
        return new Promise((resolve, reject) => {
            resolve(observationList)
        })

    }
}
export default UserService
