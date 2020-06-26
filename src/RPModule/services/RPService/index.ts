import {getObservationsResponse  ,requestObject,getObservationDetailsRequest } from "../../../UserModule/stores/types"
import { getRPObservationsResponse,getRPObservationDetailsResponse } from "../../stores/types";

export interface RPServiceTypes
{
   getRPObservations:(offset:number,limit:number,request_object:requestObject)=>Promise<getRPObservationsResponse>
   getRPObservationDeatilsById:(id:getObservationDetailsRequest)=>Promise<getRPObservationDetailsResponse>

}