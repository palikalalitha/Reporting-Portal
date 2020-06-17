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
   @observable observation

   @observable getObservationListAPIStatus
   @observable getObservationListAPIError

   @observable singleObservationDetails
   @observable getObservationDetailsAPIStatus
   @observable getObservationDetailsAPIError

   @observable createObservationsAPIStatus
   @observable createObservationsAPIError

   @observable categories
   @observable getCategoriesAPIError
   @observable getCategoriesAPIStatus

   @observable currentPage
   @observable totlaPages
   @observable selectedPage
   @observable filterList
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
      this.observation=[]
      this.singleObservationDetails = []
      this.filterList = []
      this.categories = []
      this.currentPage = CURRENT_PAGE
      this.totlaPages
      this.offset = OFFSET
      this.pageLimit = 3
      this.date_type = 'reported_on'
      this.sort_type = 'ASC'
      this.selectedPage = OFFSET
   }
   @action.bound
   setDate_typeAndSortType(date,sort) {
      this.date_Type = date
      this.sort_type = sort
      this.getObservationList()

   }
   @action.bound
   filterByStatus(statusList) {
      this.filterList = statusList
      this.getObservationList()
   }
   @action.bound
   getObservationList() {
      let requestObject = {
         date_type: this.date_type,
         sort_by: this.sort_type,
         filter_by: this.filterList
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
      let list = response
      let updateList = list.slice(this.offset, this.pageLimit + this.offset)
      this.observationList = updateList.map(each => {
         return new UserModel(each)
      })
      this.totlaPages = Math.ceil(response.length / this.pageLimit)
      //below code using backend api response
      //   this.observationList = response['total_list'].map(eachObservation => {
      //          return new UserModel(eachObservation)
      //       })

      //       this.totlaPages = Math.ceil(response['count'] / this.pageLimit)
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
      this.offset = Math.ceil(selected * this.pageLimit)
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
      this.singleObservationDetails = {
         id:id,
         title: title,
         description: description,
         priority: priority,
         status: status,
         reported_on: reported_on,
         category_name: response.category_name,
         sub_category_name: response.sub_category_name,
         due_date: due_date,
         due_date_privacy: is_due_date_private,
         assigned_to_name: response.assigned_to_name
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
      SubCategory,onSuccess,onFailure
   ) {
      if (category === null || SubCategory === null) {
         category = null
         SubCategory = null
      }
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
       .to(this.setGetCreateObservationsAPIStatus, response => {
            this.setCreateObservationsResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setGetCreateObservationsAPIError(error)
            onFailure()
         })

   }

   @action.bound
   setCreateObservationsResponse(response) {
      this.observation=response
      // this.observationList.push(new UserModel(response))
      // console.log(this.observationList)
      // this.getObservationList(response)
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
   @action.bound
   setGetCategoriesAPIStatus(status) {
      this.getCategoriesAPIStatus = status
   }
   @action.bound
   setGetCategoriesAPIError(error) {
      this.getCategoriesAPIError = error
   }
   @action.bound
   setCategoriesResponse(response) {
      this.categories = response
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
