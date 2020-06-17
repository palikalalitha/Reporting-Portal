import Cookie from 'js-cookie'

import {
   API_SUCCESS,
   API_INITIAL,
   API_FAILED,
   API_FETCHING
} from '@ib/api-constants'


import { SignInFixture } from '../../services/SignInServices/SignIn.fixture'

import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'

import { SignInStore } from '.'

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('SignInStore Tests', () => {
   let signInAPI
   let signInStore

   beforeEach(() => {
      //signInAPI = new SignInAPI()
      signInAPI = new SignInFixture()

      signInStore = new SignInStore(signInAPI)
   })

   it('should test initialising signin store', () => {
      expect(signInStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(signInStore.getUserSignInAPIError).toBe(null)
   })

   it('should test userSignInAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      //internal code for signInAPI-{
      //    signInAPI:realfn
      //    signInAPI:mockSignInAPI it overrides the realfn
      // }
      signInAPI.signInAPI = mockSignInAPI

      signInStore.userSignIn(requestObject, onSuccess, onFailure)
      expect(signInStore.getUserSignInAPIStatus).toBe(API_FETCHING)
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test userSignInAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockSuccessPromise = Promise.resolve(getUserSignInResponse)
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      signInAPI.signInAPI = mockSignInAPI

      await signInStore.userSignIn(requestObject, onSuccess, onFailure)
      expect(signInStore.getUserSignInAPIStatus).toBe(API_SUCCESS)
      expect(mockSetCookie).toBeCalled()
      expect(onSuccess).toBeCalled()
   })

   it('should test userSignInAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      signInAPI.signInAPI = mockSignInAPI

      signInStore = new SignInStore(signInAPI)
      await signInStore.userSignIn(requestObject, onSuccess, onFailure)

      expect(signInStore.getUserSignInAPIStatus).toBe(API_FAILED)
      expect(signInStore.getUserSignInAPIError).toBe('error')
      expect(onFailure).toBeCalled()
   })
})
