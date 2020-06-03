import React from "react"
import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import { UserStore } from "../../../UserModule/stores/UserStore/"
import {UserModel} from "../../../UserModule/stores/models/UserModel"

class RPStore extends UserStore{
   @observable updateRpObservationList
   @observable getUpdatebservationListAPIStatus
   @observable getUpdateObservationListAPIError


   @observable assignedObservationList
   @observable getAssignedObservationListAPIStatus
   @observable getAssignedObservationListAPIError


   constructor(rpServiceResponse,userServiceResponse) {
      super(userServiceResponse)
      
      this.rpService = rpServiceResponse
      this.init()
   }
   init() {
      this.getAssignedObservationListAPIStatus = API_INITIAL
      this.getAssignedObservationListAPIError = null
   
      this.getUpdatebservationListAPIStatus=API_INITIAL
      this.getUpdateObservationListAPIError=null
      this.assignedObservationList=[]
      this.updateRpObservationList=[]
   }
   @action.bound
   updatedObservationList() {
      const userPromise = this.rpService.getRPObservations()
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setUpdateObservationList,
            this.setGetUpdateObservationListAPIStatus
         )
         .catch(this.setGetUpdateObservtionListAPIError)
   }

   @action.bound
   setUpdateObservationList(response) {
      this.updateRpObservationList = response.map(eachObservation => {
         return new RpModel(eachObservation)
      })
   }
   @action.bound
   setGetUpdateObservtionListAPIError(error) {
      this.getUpdateObservationListAPIError = error
   }

   @action.bound
   setGetUpdateObservationListAPIStatus(status) {
      this.getUpdatebservationListAPIStatus = status
   }





   @action.bound
   getAssignedObservationList() {
      const userPromise = this.rpService.getRPObservations()
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetAssignedObservationListAPIStatus,
            this.setAssignedObservationListResponse
         )
         .catch(this.setGetAssignedObservationListAPIError)
   }

   @action.bound
   setAssignedObservationListResponse(response) {
      this.assignedObservationList = response.map(eachObservation => {
         return new UserModel(eachObservation)
      })
   }
   @action.bound
   setGetAssignedObservationListAPIError(error) {
      this.getAssignedObservationListAPIError = error
   }

   @action.bound
   setGetAssignedObservationListAPIStatus(status) {
      this.getAssignedObservationListAPIStatus = status
   }

}
export { RPStore }
