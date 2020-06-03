import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

import { URL } from '../../../UserModule/constants/RouteConstants'
//import endPoints from "../endPoints.js"

class RPServiceAPI {
   api
   constructor() {
      this.api = create({
         baseURL: URL
      })
   }
   getUsersResponse() {
      return networkCallWithApisauce(
         this.api,
         `v1/observations`,
         {},
         apiMethods.get
      )
   }
}
export { RPServiceAPI }
