import { create } from 'apisauce'

import rpObservationList from '../../fixtures/getRPObservationList.json'
import signleObservationDetails from "../../fixtures/getRPObservationDetails.json"
import {RPServiceTypes} from "./index"
import { resolveWithTimeout } from "../../../SignInModule/utils/TestUtils"


class RPServiceFixture implements RPServiceTypes{
   getRPObservations(offset, limit, request_data) {
      let list = rpObservationList
      console.log("offset",offset,limit)
      let updateList = list.slice(offset, limit + offset)
      const response = {
         result: updateList,
         totalCount: rpObservationList.length
      }
      console.log("in fixture",response)
      return resolveWithTimeout(response)
   }

   getRPObservationDeatilsById(id)
   {
      return resolveWithTimeout(signleObservationDetails)

   }
}
export default RPServiceFixture
