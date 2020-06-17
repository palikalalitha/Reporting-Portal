import observationList from '../../fixtures/getObservationList.json'
import signleObservationDetails from '../../fixtures/getObservationById.json'
import categories from "../../fixtures/getCategories.json"
class UserService {
   getUsersResponse() {
      return new Promise((resolve, reject) => {
        resolve(observationList)
      })
   }
   createObservations(request) {
      return new Promise((resolve, reject) => {
         resolve(request)
      })
   }
   getObservationDeatilsById(id) {
      return new Promise((resolve, reject) => {
         resolve(observationList[id - 1])
      })
   }
   getCategories() {
      return new Promise((resolve, reject) => {
               resolve(categories)
      })
   }
}
export default UserService
