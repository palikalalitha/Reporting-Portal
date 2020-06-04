import { create } from 'apisauce'
import {toJS} from "mobx"
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

import { URL, SWAGER_URL } from '../../constants/RouteConstants'
class UserServiceAPI {
   api
   constructor() {
      this.api = create({
         baseURL: SWAGER_URL
      })
   }
   getUsersResponse(offset,limit) {
      return networkCallWithApisauce(
         this.api,
         `get/user/observations/v1/?offset=0&limit=1`,
         {},
         apiMethods.get
         // `/get_observations/v1/?offset=${offset}&limit=${limit}`,
         // {"status":null,"due_date":null,"reported_on":null,"category_ids_list":[1],"sub_category_ids_list":[],"type_of_list":"my_observations"},
         // apiMethods.post
      )
   }
   getObservationDeatilsById(id) {
      return networkCallWithApisauce(
         this.api,
         `observation/${id}/v1/`,
         {id},
         apiMethods.get     
          )
   }

   createObservations(request)
   {
      return networkCallWithApisauce(
         this.api,
         `/create/observation/v1/`,
         request,
         apiMethods.post     
         )
      
   }
   sortByDate(date_type,sort_type)
   {
      return networkCallWithApisauce(
         this.api,
         `v1/observations`,
         {date_type,sort_type},
         apiMethods.post
      ) 
   }
}
export { UserServiceAPI }
