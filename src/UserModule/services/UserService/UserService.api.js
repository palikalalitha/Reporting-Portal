import { create } from 'apisauce'
import {toJS} from "mobx"
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

import {  SWAGER_URL } from '../../constants/RouteConstants'
import {URL} from "../../../common/constants/ReportingPortalconstants"


class UserServiceAPI {
   api
   constructor() {
      this.api = create({
         baseURL: URL
      })
   }
   getUsersResponse(offset,limit,request_data) {
      return networkCallWithApisauce(
         this.api,
         `/get/user/observations/v1/?offset=${offset}&limit=${limit}`,
      request_data,
         apiMethods.post
      )
   }
   getObservationDeatilsById(id) {
      return networkCallWithApisauce(
         this.api,
         `observation/${id}/v1/`,
         {id},
         apiMethods.post     
          )
   }

   createObservations(request)
   {
      console.log(request)
      return networkCallWithApisauce(
         this.api,
         `/create/observation/v1/`,
         request,
         apiMethods.post     
         )
   }
}
export { UserServiceAPI }
