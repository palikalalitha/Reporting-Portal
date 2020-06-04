import React from 'react'
import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

import {
   CURRENT_PAGE,
   PAGE_LIMIT,
   OFFSET
} from '../../constants/userStoreConstants'

import { UserModel } from '../models/UserModel'

class UserStore {
   @observable observationList
   @observable getObservationListAPIStatus
   @observable getObservationListAPIError

   @observable getObservationDetailsAPIStatus
   @observable getObservationDetailsAPIError

   @observable getObservationSoretedListAPIStatus
   @observable getObservationSoretedListAPIError

   @observable createObservationsAPIStatus
   @observable createObservationsAPIError

   @observable currentPage
   @observable totlaPages
   @observable selectedPage
   @observable date_type
   @observable sort_type
   userService
   pageLimit
   offset

   constructor(userServiceResponse) {
      this.userService = userServiceResponse
      this.init()
   }
   init() {
      this.getObservationListAPIStatus = API_INITIAL
      this.getObservationListAPIError = null

      this.getObservationDetailsAPIError = null
      this.getObservationDetailsAPIStatus=API_INITIAL

      this.getObservationSoretedListAPIStatus=API_INITIAL
      this.getObservationSoretedListAPIError=null

      this.createObservationsAPIStatus=API_INITIAL
      this.createObservationsAPIError=null

      this.observationList = []
      this.currentPage = CURRENT_PAGE
      this.totlaPages = ''
      this.offset = OFFSET
      this.pageLimit = PAGE_LIMIT
      this.date_type = 'reported on'
      this.sort_type = 'ASC'
   }
  
   @action.bound
   getObservationList() {
      let reqObj={"status":null,"due_date":null,"reported_on":null,"category_ids_list":[1],"sub_category_ids_list":[2],"type_of_list":"my_observations"}
     
      const userPromise = this.userService.getUsersResponse(this.offset,this.pageLimit)
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetObservationListAPIStatus,
            this.setObservationListResponse
         )
         .catch(this.setGetObservationListAPIError)
   }
   @action.bound
   setObservationListResponse(response) {
    // console.log(response)
      const { offset, pageLimit } = this
      let list = response
      let updatedList = list.slice(offset, pageLimit + offset)
      this.observationList =updatedList.map(eachObservation => {
       return new UserModel(eachObservation)
      })
      this.totlaPages = Math.ceil(response.length /this.pageLimit)
   }
   @action.bound
   setGetObservationListAPIError(error) {
      this.getObservationListAPIError = error
   }

   @action.bound
   setGetObservationListAPIStatus(status) {
      this.getObservationListAPIStatus = status
   }

  
   @action.bound
   handlePage(page) {
      let selected = page.selected
      this.offset = Math.ceil(selected * this.currentPage)
      this.selectedPage = page.selected
      //this.offset+=this.pageLimit
      this.getObservationList()
   }

   @action.bound
   getObservationDetailsById(id)
   {
      console.log("in geting details")
      const userPromise = this.userService.getObservationDeatilsById(id)
      return bindPromiseWithOnSuccess(userPromise)
      .to(
         this.setGetObservationDetailsAPIStatus,
         this.setObservationDeatilsResponse
      )
      .catch(this.setGetObservationDetailsAPIError)

   }

   @action.bound
   setGetObservationDetailsAPIStatus(status)
   {
      this.getObservationDetailsAPIStatus=status
   }

   @action.bound
   setObservationDeatilsResponse(response) {
      console.log(response)
      // const { offset, pageLimit } = this
      // let list = response
      // let updatedList = list.slice(offset, pageLimit + offset)
      // this.observationList = response.map(eachObservation => {
      //    return new UserModel(eachObservation)
      // })
      this.totlaPages = Math.ceil(response.length / pageLimit)
   }
   @action.bound
   setGetObservationDetailsAPIError(error) {
      this.getObservationDetailsAPIError = error
   }




   @action.bound
   getSortedObservationList() {
      const userPromise = this.userService.sortByDate()
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetObservationSortedListAPIStatus,
            this.setObservationSortedListResponse
         )
         .catch(this.setGetObservationSortedListAPIError)
   }
   @action.bound
   setObservationSortedListResponse(response) {
      const { offset, pageLimit } = this
      let list = response
      let updatedList = list.slice(offset, pageLimit + offset)
      this.observationList = updatedList.map(eachObservation => {
         return new UserModel(eachObservation)
      })
      console.log(this.observationList)
      this.totlaPages = Math.ceil(response.length / pageLimit)
   }
   @action.bound
   setGetObservationSortedListAPIError(error) {
      this.getObservationSoretedListAPIError = error
   }

   @action.bound
   setGetObservationSortedListAPIStatus(status) {
      this.getObservationSoretedListAPIStatus = status
   }

   @action.bound
   onAddObservationList(observationTitle,observationSeverity,observationDesc,category,SubCategory) {
      let observationObj = {
         title: observationTitle,
         priority: observationSeverity,
         description: observationDesc,
         category:category,
         sub_category:SubCategory
      }
        console.log(observationObj)
        const userPromise = this.userService.createObservations(observationObj)
        return bindPromiseWithOnSuccess(userPromise)
           .to(
              this.setGetCreateObservationsAPIStatus,
              this.setCreateObservationsResponse
           )
           .catch(this.setGetCreateObservationsAPIError)
  

     // const observationModel = new UserModel(observationObj)
      // this.observationList.push(observationModel)
   }
 
   @action.bound
   setCreateObservationsResponse(response) {
      // const { offset, pageLimit } = this
      // let list = response
      // let updatedList = list.slice(offset, pageLimit + offset)
      // this.observationList = updatedList.map(eachObservation => {
      //    return new UserModel(eachObservation)
      // })
      console.log(response)
      this.totlaPages = Math.ceil(response.length / pageLimit)
   }
   @action.bound
   setGetCreateObservationsAPIError(error) {
      this.getObservationSoretedListAPIError = error
   }

   @action.bound
   setGetCreateObservationsAPIStatus(status) {
      this.getObservationSoretedListAPIStatus = status
   }
   @computed
   get userObservationList() {
      return this.observationList
   }
   @computed get totalObservations() {
      return this.observationList.length
   }
}
export { UserStore }
