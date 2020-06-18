import observationList from '../../fixtures/getObservationList.json'
import signleObservationDetails from '../../fixtures/getObservationById.json'
import categories from '../../fixtures/getCategories.json'
class UserService {
   getUsersResponse(offset, limit) {
      let list = observationList
      let updateList = list.slice(offset, limit + offset)
      let result = {
         result: updateList,
         totalCount: observationList.length
      }
      return new Promise((resolve, reject) => {
         resolve(result)
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
