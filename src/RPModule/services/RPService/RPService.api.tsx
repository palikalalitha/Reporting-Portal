import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

import { URL } from '../../../UserModule/constants/RouteConstants'

import {RPServiceTypes} from "./index"

class RPServiceAPI implements RPServiceTypes {
   api:Record<string,any>
   constructor() {
      this.api = create({
         baseURL: URL
      })
   }
   getRPObservations(offset, limit, request_data) {
      return networkCallWithApisauce(
         this.api,
         `/get/rp/observations/v1/?offset=${offset}&limit=${limit}`,
         request_data,
         apiMethods.get
      )
   }
   getRPObservationDeatilsById(id)
   {
      return networkCallWithApisauce(
         this.api,
         `/get/rp/observations/v1/`,
         id,
         apiMethods.get
      )
   }
}
export { RPServiceAPI }
