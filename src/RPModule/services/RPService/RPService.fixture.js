import { create } from 'apisauce'

import observationList from '../../../UserModule/fixtures/getObservationList.json'
class RPServiceFixture {
   getRPObservations() {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(observationList), 2000)
      })
   }
}
export default RPServiceFixture
