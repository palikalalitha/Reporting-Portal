import React, { Component } from 'react'
import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
// import { UserStore } from '../../../UserModule/stores/UserStore/'
import { UserStore } from '../../../UserModule/stores/userStore/UserStore'
import { UserModel } from '../../../UserModule/stores/models/UserModel'
import { PaginationStore } from '../../../common/stores/PaginationStore'
import RPServiceFixture from "../../services/RPService/RPService.fixture"
import UserService from "../../../UserModule/services/UserService/UserService.fixture"
import { RPModel } from "../Models/RPModel"

class RPStore extends UserStore {
   rpService:RPServiceFixture
   @observable updateRpObservationList
   @observable getUpdatebservationListAPIStatus!:APIStatus
   @observable getUpdateObservationListAPIError!:Error|null

   @observable assignedObservationList!:Array<RPModel>
   @observable getAssignedObservationListAPIStatus!:APIStatus
   @observable getAssignedObservationListAPIError!:Error|null

   @observable rpAssignedObservationDetails!:any
   @observable getRPObservationDetailsAPIError!:Error|null
   @observable getRPObservationDetailsAPIStatus!:APIStatus


   @observable status
   @observable due_date
   @observable due_date_privacy

   @observable rpPageLimit!:number
   @observable rpOffset!:number
   constructor(rpServiceResponse:RPServiceFixture, userServiceResponse:UserService) {
      super(userServiceResponse)
      this.init()
      this.rpService = rpServiceResponse
      this.paginationStore = new PaginationStore(
         this.rpService.getRPObservations,
         this.rpPageLimit,
         this.rpOffset,
         RPModel,
      )
   }
   init() {
      this.getAssignedObservationListAPIStatus = API_INITIAL
      this.getAssignedObservationListAPIError = null

      this.getUpdatebservationListAPIStatus = API_INITIAL
      this.getUpdateObservationListAPIError = null
      this.assignedObservationList = []
      this.updateRpObservationList = []
      this.rpPageLimit = 4
      this.rpOffset = 0
      this.due_date = ''
      this.due_date_privacy = ''
   }
   @action.bound
   handlePage(page: { selected: any }) {
      this.paginationStore.updatePage(page.selected)
      this.getAssignedObservationList()
   }
   // @action.bound
   // updatedObservationList() {
   //    const userPromise = this.rpService.getRPObservations(this.rpOffset,this.rpPageLimit,{})
   //    return bindPromiseWithOnSuccess(userPromise)
   //       .to(
   //          this.setUpdateObservationList,
   //          this.setGetUpdateObservationListAPIStatus
   //       )
   //       .catch(this.setGetUpdateObservtionListAPIError)
   // }

   // @action.bound
   // setUpdateObservationList(response) {
   //    // this.updateRpObservationList = response.map(eachObservation => {
   //    //    return new RpModel(eachObservation)
   //    // })
   // }
   // @action.bound
   // setGetUpdateObservtionListAPIError(error) {
   //    this.getUpdateObservationListAPIError = error
   // }

   // @action.bound
   // setGetUpdateObservationListAPIStatus(status) {
   //    this.getUpdatebservationListAPIStatus = status
   // }
   @action.bound
   clearUpdateValues = () => {
      //this.date = ''
      this.due_date = ''
      this.due_date_privacy = ''
   }

   @action.bound
   getAssignedObservationList=async()=> {
      let requestObject = {
         date_type: this.date_type,
         sort_by: this.sort_type,
         filter_by: this.filterList
      }
      await this.paginationStore.getEntitesList(requestObject)
      this.assignedObservationList = this.paginationStore.entityList
    
   }
   @action.bound
   getRPObservationDetailsById(id) {

      const userPromise = this.userService.getObservationDeatilsById(id)
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetRPObservationDetailsAPIStatus,
            this.setRPObservationDeatilsResponse
         )
         .catch(this.setGetRPObservationDetailsAPIError)
   }

   @action.bound
   setGetRPObservationDetailsAPIStatus(status) {
      this.getRPObservationDetailsAPIStatus = status
   }

   @action.bound
   setRPObservationDeatilsResponse(response) {
      const {
         title,
         description,
         priority,
         status,
         reported_on,
         due_date,
         is_due_date_private,
         id
      } = response
      this.rpAssignedObservationDetails = {
         id: id,
         title: title,
         description: description,
         priority: priority,
         status: status,
         reported_on: reported_on,
         category_name: response.category_name,
         sub_category_name: response.sub_category_name,
         due_date: due_date,
         due_date_privacy: is_due_date_private,
         reported_by: response.reported_by
      }
   }
   @computed
   get getSingleObservationDetails() {
      return this.rpAssignedObservationDetails
   }
   @action.bound
   setGetRPObservationDetailsAPIError(error) {
      this.getRPObservationDetailsAPIError = error
   }
}
export { RPStore }
