import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'

import observationList from '../../fixtures/getObservationList'
import UserService from '../../services/UserService/UserService.fixture'
import newObservation from "../../fixtures/newObservation.json"
import categories from "../../fixtures/getCategories.json"
import { UserStore } from './index'
describe('user store test', () => {
   let userService
   let userStore
   beforeEach(() => {
      userService = new UserService()
      userStore = new UserStore(userService)
   })

   it('should test user store initialising state', () => {
      expect(userStore.observationList).toStrictEqual(new Array())

   })
 
    it('should test add Observation API initialising state', () => {
      expect(userStore.observation).toStrictEqual(new Array())
      expect(userStore.createObservationsAPIStatus).toBe(API_INITIAL)
      expect(userStore.createObservationsAPIError).toBe(null)
   })

    it('should test add Observation data fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      const onSuccess=jest.fn()
      const onFailure=jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      userService.createObservations = mockSignInAPI

      userStore.onAddObservationList({},onSuccess,onFailure)
      expect(userStore.createObservationsAPIStatus).toBe(API_FETCHING)
        expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })
    it('should test  add Observation success state', async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(newObservation)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      userService.createObservations = mockSignInAPI

      const onSuccess=jest.fn()
      const onFailure=jest.fn()
      await userStore.onAddObservationList("observationTetitle","observationSeverity","observationDesc","category",
      "SubCategory",onSuccess,onFailure)
      expect(userStore.createObservationsAPIStatus).toBe(API_SUCCESS)
      expect(onSuccess).toBeCalled()
       await userStore.onAddObservationList("observationTitle","observationSeverity","observationDesc",null,
      null,onSuccess,onFailure)
      expect(userStore.createObservationsAPIStatus).toBe(API_SUCCESS)
      expect(onSuccess).toBeCalled()
   })


   it('should test user store add Observation failure state', async () => {
       const onSuccess=jest.fn()
      const onFailure=jest.fn()
      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      userService.createObservations = mockSignInAPI
      userStore=new UserStore(userService)
      await userStore.onAddObservationList("observationTitle","observationSeverity","observationDesc","category",
      "SubCategory",onSuccess,onFailure)
     
      expect(userStore.createObservationsAPIStatus).toBe(API_FAILED)
      expect(userStore.createObservationsAPIError).toBe('error')
      expect(onFailure).toBeCalled()
   })


   
    it('should test getCategories  initialising state', () => {
      expect(userStore.categories).toStrictEqual(new Array())
      expect(userStore.getCategoriesAPIStatus).toBe(API_INITIAL)
      expect(userStore.getCategoriesAPIError).toBe(null)
   })

    it('should test getCategories data fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      const onSuccess=jest.fn()
      const onFailure=jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      userService.getCategories = mockSignInAPI

      userStore.onClickTogetCategories()
      expect(userStore.getCategoriesAPIStatus).toBe(API_FETCHING)
   })
    it('should test getCategories data success state', async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve("catgories")
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      userService.getCategories = mockSignInAPI

      await userStore.onClickTogetCategories()
      expect(userStore.getCategoriesAPIStatus).toBe(API_SUCCESS)

   })


   it('should test getCategories data failure state', async () => {

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      userService.getCategories = mockSignInAPI
      await userStore.onClickTogetCategories()
      expect(userStore.getCategoriesAPIStatus).toBe(API_FAILED)

   })

    it('should test getObservationDeatilsById API call  initialising state', () => {
      expect(userStore.singleObservationDetails ).toStrictEqual(new Array())
      expect(userStore.getObservationDetailsAPIStatus).toBe(API_INITIAL)
      expect(userStore.getObservationDetailsAPIError).toBe(null)
   })

    it('should test getObservationDeatilsById data fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()

      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      userService.getObservationDeatilsById = mockSignInAPI

      userStore.getObservationDetailsById()
      expect(userStore.getObservationDetailsAPIStatus).toBe(API_FETCHING)
   })
    it('should test getObservationDeatilsById data success state', async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(observationList[1])
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      userService.getObservationDeatilsById = mockSignInAPI

      await userStore.getObservationDetailsById(2)
      expect(userStore.getObservationDetailsAPIStatus).toBe(API_SUCCESS)
      expect(userStore.getSingleObservationDetails).toBeDefined()

   })


   it('should test getObservationDeatilsById data failure state', async () => {

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      userService.getObservationDeatilsById = mockSignInAPI
      await userStore.getObservationDetailsById()
      expect(userStore.getObservationDetailsAPIStatus).toBe(API_FAILED)

   })

   it("should test the date_type and sort_Type variables",()=>
   {
   expect(userStore.date_type).toBe("reported_on")
   expect(userStore.sort_type).toBe("ASC")
   expect(userStore.filterList).toStrictEqual(new Array())
   })
it("should test the setDate_typeAndSortType function",()=>
{
   userStore.setDate_typeAndSortType("reported_on","DESC")
   expect(userStore.date_type).not.toBe("due_date")
   expect(userStore.sort_type).toBe("DESC")

   userStore.setDate_typeAndSortType("due_date","DESC")
   //expect(userStore.date_type).toBe("due_date") 
   expect(userStore.sort_type).toBe("DESC")

})
it("should test filterList function",()=>
{
   let list=["closed"]
   userStore.filterByStatus(list)
   expect(userStore.filterList.length).toBe(1)
   list=["closed","resolved"]
   userStore.filterByStatus(list)
   expect(userStore.filterList.length).toBe(2)
})  
it("should test andle hpage  function",async()=>
{
   let page={
      selected:1
   }
   await userStore.handlePage(page)
   expect(userStore.observationList).toBeDefined()
  
})
})
