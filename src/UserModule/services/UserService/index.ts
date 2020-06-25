import {  requestObject,getObservationsResponse, getObservationDetailsRequest, getObservationDetailsResponse, createObservationRequest, createObservationResponse, ObservationObject } from "../../stores/types";

export interface UserServiceTypes
{
   getUsersResponse:(offset:number,limit:number,request_object:requestObject)=>Promise<getObservationsResponse>

   getObservationDeatilsById:(id:getObservationDetailsRequest)=>Promise<getObservationDetailsResponse>
   
   createObservations:(request_object:createObservationRequest)=>Promise<createObservationResponse>
}