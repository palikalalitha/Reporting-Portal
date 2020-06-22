import { create } from 'apisauce'
import { toJS } from 'mobx'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

import { SWAGER_URL } from '../../constants/RouteConstants'
import { URL } from '../../../common/constants/reportingPortalconstants'

class UserServiceAPI {
   api
   constructor() {
      this.api = create({
         //baseURL: URL
         baseURL: 'https://5ecf59d316017c00165e29bc.mockapi.io/'
      })
   }
   getUsersResponse(offset, limit, request_data) {
      return networkCallWithApisauce(
         this.api,
         // `/get/user/observations/v1/?offset=${offset}&limit=${limit}`,
         'get/user/observations/v1/observations',
         request_data,
         apiMethods.post
      )
   }
   getObservationDeatilsById(id) {
      return networkCallWithApisauce(
         this.api,
         `observation/${id}/v1/`,
         { id },
         apiMethods.post
      )
   }

   createObservations(request) {
      return networkCallWithApisauce(
         this.api,
         `/create/observation/v1/`,
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
   // getCategories()
   // {
   //    return networkCallWithApisauce(
   //       this.api,
   //       `/get/categories/subcategories/v1/`,
   //       {},
   //       apiMethods.get
   //    )

   // }
}
export { UserServiceAPI }
