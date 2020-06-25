import { create } from 'apisauce'
import { apiMethods } from '../../../constants/APIConstants'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { URL } from '../../../common/constants/reportingPortalconstants'

import {UserServiceTypes} from "./index"
import endpoints from "../endpoints"

class UserServiceAPI implements UserServiceTypes {
   api:Record<string,any>
   constructor() {
      this.api = create({
        baseURL: URL
         // baseURL: 'https://5ecf59d316017c00165e29bc.mockapi.io/'
      })
   }
   getUsersResponse(offset,limit,request_data) {
      return networkCallWithApisauce(
         this.api,
        `/get/user/observations/v1/?offset=${offset}&limit=${limit}`,
         // endpoints.reportingPortal.getObservationList,
         request_data,
         apiMethods.post
      )
   }
   getObservationDeatilsById(id) {
      return networkCallWithApisauce(
         this.api,
         `observation/${id}/v1/`,
         id,
         apiMethods.post
      )
   }

   createObservations(request) {
      return networkCallWithApisauce(
         this.api,
         endpoints.reportingPortal.createObservations,
         request,
         apiMethods.post
      )
   }
   getCategories() {
      return new Promise((resolve, reject) => {
         resolve([
            { value: '1', label: 'Cleaning' },
            { value: '2', label: 'Water' },
            { value: '3', label: 'KeybBoard' }
         ])
      })
   }

}
export { UserServiceAPI }
