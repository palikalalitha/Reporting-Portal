import observationList from '../../fixtures/getObservationList.json'
import signleObservationDetails from '../../fixtures/getObservationById.json'

class UserService {
   getUsersResponse() {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(observationList), 3000)
      })
   }
   createObservations(request) {
      console.log(request)
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
         setTimeout(
            () =>
               resolve([
                  { value: '1', label: 'Cleaning' },
                  { value: '2', label: 'Water' },
                  { value: '3', label: 'KeybBoard' }
               ]),
            3000
         )
      })
   }
}
export default UserService
