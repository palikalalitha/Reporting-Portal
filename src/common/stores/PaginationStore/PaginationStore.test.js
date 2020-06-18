import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
 } from '@ib/api-constants'
import { UserStore } from "../../../UserModule/stores/UserStore"

import { UserModel } from "../../../UserModule/stores/models/UserModel"
import UserService from "../../../UserModule/services/UserService/UserService.fixture"
import { PaginationStore } from "./PaginationStore"
import observationList from "../../../UserModule/fixtures/getObservationList.json"

describe('Pagination store test', () => {
   let paginationStore
   let userStore
   let userService
    beforeEach(() => {
        userService=new UserService()
        userStore=new UserStore(userService)
        paginationStore =new PaginationStore(userService.getUsersResponse,userStore.pageLimit,userStore.offset,UserModel)     
    })
   it('should test pagination Store initialising state', () => {
       expect(paginationStore.entityList).toStrictEqual(new Array())
       expect(paginationStore.getEntityListAPIStatus).toBe(API_INITIAL)
       expect(paginationStore.getEntityListAPIError).toBe(null)
       expect(paginationStore.selectedPage).toBe(0)
       expect(paginationStore.totalPages).toBe("")
    })
    it('should test pagination Store  data fetching state', () => {
       const mockLoadingPromise = new Promise(function(resolve, reject) {})
       const mockUserResponseAPI = jest.fn()
       mockUserResponseAPI.mockReturnValue(mockLoadingPromise)
       paginationStore.serviceMethod= mockUserResponseAPI
 
       paginationStore.getEntitesList()
       expect(paginationStore.getEntityListAPIStatus).toBe(API_FETCHING)
    })
 
    it('should test pagination Store success state', async () => {
       await paginationStore.getEntitesList()
       expect(paginationStore.entityList).toBeDefined()
       expect(paginationStore.getEntityListAPIStatus).toBe(API_SUCCESS)
 
    })
     it('should test pagination Store failure state', async () => {
       const mockFailurePromise = new Promise(function(resolve, reject) {
          reject(new Error('error'))
       })
 
       const mockUserResponseAPI = jest.fn()
       mockUserResponseAPI.mockReturnValue(mockFailurePromise)
       paginationStore.serviceMethod= mockUserResponseAPI
 
       await paginationStore.getEntitesList()
       expect(paginationStore.getEntityListAPIStatus).toBe(API_FAILED)
       expect(paginationStore.getEntityListAPIError).toBe('error')
    })
    
 it('should test user store pagination function', async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(observationList)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      userService.getUsersResponse = mockSignInAPI
      let page={
        selected:1
     }
     paginationStore.updatePage(page.selected)
      await paginationStore.getEntitesList()

      expect(paginationStore.offset).toBe(3)
      expect(paginationStore.pageLimit).toBe(3)   
 })
})