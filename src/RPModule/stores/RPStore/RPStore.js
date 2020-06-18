import React, { Component } from 'react'
import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import { UserStore } from '../../../UserModule/stores/UserStore/'
import { UserModel } from '../../../UserModule/stores/models/UserModel'
import { SamplePaginationStore } from "../../../common/stores/SamplePaginationStore/SamplePaginationStore"

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

   @observable rpPageLimit
   @observable rpCurrentPage
   @observable rpOffset
   @observable totalPages
   @observable rpSelectedPage

   constructor(rpServiceResponse, userServiceResponse) {
     
   
      super(userServiceResponse)
      this.init()
      this.rpService = rpServiceResponse
      this.paginationStore=new SamplePaginationStore(this.rpServiceResponse,UserModel,this.totalPages,this.pageLimit)
     
   }
   init() {
      this.getAssignedObservationListAPIStatus = API_INITIAL
      this.getAssignedObservationListAPIError = null

      this.getUpdatebservationListAPIStatus = API_INITIAL
      this.getUpdateObservationListAPIError = null
      this.assignedObservationList = []
      this.updateRpObservationList = []
      this.rpPageLimit = 4
      this.rpCurrentPage = 1
      this.offset = 0
      this.totalPages = 0
      this.selectedPage
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
      let requestObject = {
         date_type: this.date_type,
         sort_by: this.sort_type,
         filter_by: []
      }
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
      this.assignedObservationList = updatedList.map(eachObservation => {
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
