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
import { PaginationStore } from '../../../common/stores/PaginationStore'
import UserService from "../../services/UserService/UserService.fixture"
// export interface Response
// {
//    title:string
//          description:string
//          priority:string
//          status:string
//          reported_on:string
//          due_date:string
//          is_due_date_private:boolean
//          id:number
//          category_name:
//          {
//             category_name:string
//          }  
//          sub_category_name:
//          {
//             sub_category_name:string
//          }
//          assigned_to_name:
//          {
//             assigned_to_name:string
//          }
// }
// // interface Props
// // {}

class UserStore {
   @observable observationList:Array<Object>=[]
   @observable observation:string=""

   @observable getObservationListAPIStatus:number|any
   @observable getObservationListAPIError:number|any

   @observable singleObservationDetails:any
   @observable getObservationDetailsAPIStatus:number|any
   @observable getObservationDetailsAPIError:number|any

   @observable createObservationsAPIStatus:number|any
   @observable createObservationsAPIError:number|any

   @observable categories:Array<Object>=[]
   @observable getCategoriesAPIError:number|any
   @observable getCategoriesAPIStatus:number|any

   @observable filterList:Array<Object>=[]
   @observable date_type:string=""
   @observable sort_type:string=""
   paginationStore:PaginationStore
   userService:UserService
   pageLimit:number=0
   offset:number=0
   constructor(userServiceResponse: UserService) {
      this.init()
      this.userService = userServiceResponse
      this.paginationStore = new PaginationStore(
         this.userService.getUsersResponse,
         this.pageLimit,
         this.offset,
         UserModel
      )
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
      this.observation = ""
      this.singleObservationDetails = []
      this.filterList = []
      this.categories = []

      this.offset = OFFSET
      this.pageLimit = 3
      this.date_type = 'reported_on'
      this.sort_type = 'ASC'
   }
   @action.bound
   setDate_typeAndSortType(date:string, sort:string) {
      this.date_type = date
      this.sort_type = sort
      this.getObservationList()
   }
   @action.bound
   filterByStatus(statusList:Array<Object>) {
      this.filterList = statusList
      this.getObservationList()
   }
   @action
   getObservationList = async () => {
      await this.paginationStore.getEntitesList()
      this.observationList = this.paginationStore.entityList
   }
   @action.bound
   handlePage(page: { selected: any }) {
      this.paginationStore.updatePage(page.selected)
      this.getObservationList()
   }

   @action.bound
   getObservationDetailsById(id:number) {
      const userPromise = this.userService.getObservationDeatilsById(id)
      return bindPromiseWithOnSuccess(userPromise)
         .to(
            this.setGetObservationDetailsAPIStatus,
            this.setObservationDeatilsResponse
         )
         .catch(this.setGetObservationDetailsAPIError)
   }

   @action.bound
   setGetObservationDetailsAPIStatus(status:number) {
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
      SubCategory,
      onSuccess,
      onFailure
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
      this.observation = response
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
}
export { UserStore }
