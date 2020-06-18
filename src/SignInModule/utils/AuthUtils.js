import getData from '@ib/api'

import { apiMethods } from '../constants/APIConstants'

import { getAccessToken } from './StorageUtils'

export const networkCallWithApisauceWithAccessToken = async (
   api,
   url,
   requestObject,
   type = apiMethods.post
) => {
   let response = null
   const accessToken = getAccessToken()
   if (accessToken) {
      api.setHeader('Authorization', `Bearer ${accessToken}`)
   }
   api.setHeader('Content-Type', 'application/json; charset=UTF-8')
   try {
      response = await getData(api, url, requestObject, type)
   } catch (error) {
      throw error
   }
   return response
}
