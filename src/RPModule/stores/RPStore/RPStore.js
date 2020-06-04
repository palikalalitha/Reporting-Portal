import React, { Component } from 'react'
import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import { UserStore } from '../../../UserModule/stores/UserStore/'
import { UserModel } from '../../../UserModule/stores/models/UserModel'

class RPStore extends UserStore {
   @observable updateRpObservationList
   @observable getUpdatebservationListAPIStatus
   @observable getUpdateObservationListAPIError

   @observable assignedObservationList
   @observable getAssignedObservationListAPIStatus
   @observable getAssignedObservationListAPIError

   @observable status
   @observable due_date
   @observable due_date_privacy

   constructor(rpServiceResponse, userServiceResponse) {
      super(userServiceResponse)
      this.rpService = rpServiceResponse
      this.init()
   }
   init() {
      this.getAssignedObservationListAPIStatus = API_INITIAL
      this.getAssignedObservationListAPIError = null

      this.getUpdatebservationListAPIStatus = API_INITIAL
      this.getUpdateObservationListAPIError = null
      this.assignedObservationList = []
      this.updateRpObservationList = []
      this.date = ''
      this.due_date = ''
      this.due_date_privacy = ''
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
   clearUpdateValues = () => {
      this.date = ''
      this.due_date = ''
      this.due_date_privacy = ''
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
      const { offset, pageLimit } = this
      let list = response
      let updatedList = list.slice(offset, pageLimit + offset)
      console.log(offset,pageLimit)
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