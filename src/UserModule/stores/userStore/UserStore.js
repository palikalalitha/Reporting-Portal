import React from 'react'
import { observable, action, computed, toJS } from 'mobx'
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
   @observable singleObservationDetails
   @observable getObservationListAPIStatus
   @observable getObservationListAPIError

   @observable getObservationDetailsAPIStatus
   @observable getObservationDetailsAPIError

   @observable createObservationsAPIStatus
   @observable createObservationsAPIError

   @observable getCategoriesAPIError
   @observable getCategoriesAPIStatus

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
      this.getObservationDetailsAPIStatus = API_INITIAL

      this.getCategoriesAPIStatus = API_INITIAL
      this.getCategoriesAPIError = null

      this.createObservationsAPIStatus = API_INITIAL
      this.createObservationsAPIError = null

      this.observationList = []
      this.singleObservationDetails = []
      this.currentPage = CURRENT_PAGE
      this.totlaPages
      this.offset = OFFSET
      this.pageLimit = 10
      this.date_type = 'reported_on'
      this.sort_type = 'ASC'
      this.selectedPage = 0
   }
   @action.bound
   setDate_typeAndSortType(date_type, sort_type) {
      this.date_Type = date_type
      this.sort_type = sort_type
      this.getObservationList()
   }

   @action.bound
   getObservationList() {
      let requestObject = {
         date_type: this.date_type,
         sort_by: this.sort_type,
         filter_by: []
      }
      const userPromise = this.userService.getUsersResponse(
         this.offset,
         this.pageLimit,
         requestObject
      )
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetObservationListAPIStatus,
            this.setObservationListResponse
         )
         .catch(this.setGetObservationListAPIError)
   }
   @action.bound
   setObservationListResponse(response) {
      this.observationList = response.map(eachObservation => {
         return new UserModel(eachObservation)
      })
      console.log('observations', this.observationList)
      this.totlaPages = Math.ceil(response.length / this.pageLimit)
      console.log('totla', this.totlaPages)
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
      console.log(page)
      let selected = page.selected
      this.offset = Math.ceil(selected * this.currentPage)
      this.selectedPage = page.selected
      this.getObservationList()
   }

   @action.bound
   getObservationDetailsById(id) {
      const userPromise = this.userService.getObservationDeatilsById(id)
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetObservationDetailsAPIStatus,
            this.setObservationDeatilsResponse
         )
         .catch(this.setGetObservationDetailsAPIError)
   }

   @action.bound
   setGetObservationDetailsAPIStatus(status) {
      this.getObservationDetailsAPIStatus = status
   }

   @action.bound
   setObservationDeatilsResponse(response) {
      this.singleObservationDetails = {
         title: response.title,
         description: response.description,
         priority: response.priority,
         status: response.status,
         reported_on: response.reported_on,
         category_id: response.category,
         sub_category_id: response.sub_category,
         due_date: response.due_date,
         due_date_privacy: response.is_due_date_private,
         assigned_to: response.assigned_to
      }
   }
   @computed
   get getSingleObservationDetails() {
      return this.singleObservationDetails
   }
   @action.bound
   setGetObservationDetailsAPIError(error) {
      this.getObservationDetailsAPIError = error
   }
   @action.bound
   onAddObservationList(
      observationTitle,
      observationSeverity,
      observationDesc,
      category,
      SubCategory
   ) {
      let observationObj = {
         title: observationTitle,
         priority: observationSeverity,
         description: observationDesc,
         category_id: category,
         sub_category_id: SubCategory,
         attachments: []
      }
      const userPromise = this.userService.createObservations(observationObj)
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetCreateObservationsAPIStatus,
            this.setCreateObservationsResponse
         )
         .catch(this.setGetCreateObservationsAPIError)
   }

   @action.bound
   setCreateObservationsResponse(response) {
      this.getObservationList()
      //  console.log(response)
   }
   @action.bound
   setGetCreateObservationsAPIError(error) {
      this.createObservationsAPIError = error
   }

   @action.bound
   setGetCreateObservationsAPIStatus(status) {
      this.createObservationsAPIStatus = status
   }
   @action.bound
   onClickTogetCategories() {
      const userPromise = this.userService.getCategories()
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetCategoriesAPIStatus, this.setCategoriesResponse)
         .catch(this.setGetCategoriesAPIError)
   }
   setGetCategoriesAPIStatus(status) {
      this.getCategoriesAPIStatus = status
   }
   setGetCategoriesAPIError(error) {
      this.getCategoriesAPIError = error
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
