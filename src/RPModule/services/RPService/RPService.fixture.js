import { create } from 'apisauce'

// import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
// import { networkCallWithApisauce } from '../../../utils/APIUtils'
// import { apiMethods } from '../../../constants/APIConstants'
import observationList from '../../../UserModule/fixtures/userData.json'
class RPServiceFixture {
   getRPObservations() {
      console.log(observationList)
      return new Promise((resolve, reject) => {
         resolve(observationList)
      })
   }
}
export default RPServiceFixture

