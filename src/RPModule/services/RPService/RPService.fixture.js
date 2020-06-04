import { create } from 'apisauce'

// import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
// import { networkCallWithApisauce } from '../../../utils/APIUtils'
// import { apiMethods } from '../../../constants/APIConstants'
import observationList from '../../../UserModule/fixtures/userData.json'
class RPServiceFixture {
   getRPObservations() {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(observationList), 2000)
      })
   }
}
export default RPServiceFixture
