import { create } from 'apisauce'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'
import observationList from '../../fixtures/userData.json'
class UserService {
   getUsersResponse() {
      return new Promise((resolve, reject) => {
         resolve(observationList)
      })
   }
   createObservations(request)
   {
      return new Promise((resolve, reject) => {
         resolve("observation-id:0")
      })
   }
}
export default UserService
