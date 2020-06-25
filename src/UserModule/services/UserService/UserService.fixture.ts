import observationList from '../../fixtures/getObservationList.json'
import signleObservationDetails from '../../fixtures/getObservationById.json'
import categories from '../../fixtures/getCategories.json'


import {UserServiceTypes} from "./index"
import { resolveWithTimeout } from "../../../SignInModule/utils/TestUtils"

class UserService implements UserServiceTypes {

   getUsersResponse(offset, limit,request_data) {
      let list = observationList
      let updateList = list.slice(offset, limit + offset)
      const response = {
         result: updateList,
         totalCount: observationList.length
      }
      return resolveWithTimeout(response)
   }

   getObservationDeatilsById(id) {
      return resolveWithTimeout(signleObservationDetails)
   } 
   createObservations(request) {
      return resolveWithTimeout(request)
   }
  
   getCategories() {
      return resolveWithTimeout(categories)
   }
}
export default UserService
