import { create } from 'apisauce'

import observationList from '../../../UserModule/fixtures/getObservationList.json'
class RPServiceFixture {
   getRPObservations() {
      return new Promise((resolve, reject) => {
         resolve(observationList)
      })
   }
}
export default RPServiceFixture
