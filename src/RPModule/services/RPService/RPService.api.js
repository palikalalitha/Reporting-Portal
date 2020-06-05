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
   getUsersResponse(offset,limiy,request_data) {
      return networkCallWithApisauce(
         this.api,
         `/get/rp/observations/v1/?offset=${offset}&limit=${limit}`,
         request_data,
         apiMethods.get
      )
   }
}
export { RPServiceAPI }
