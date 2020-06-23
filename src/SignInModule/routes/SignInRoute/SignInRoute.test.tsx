import React from 'react'

import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'

import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'

import { SignInRoute } from '.'
import { SIGN_IN_PATH } from '../../constants/RouteConstants'

import { USER_PATH } from '../../../UserModule/constants/RouteConstants'
// import { SignInAPI } from '../../services/SignInAPI/SignIn.api'
import { SignInFixture } from '../../services/SignInServices/SignIn.fixture'
import { SignInStore } from '../../stores/SignInStore'
import { RP_PATH } from '../../../RPModule/constants/RPRouteConstants/RPRouteConstants'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('SignInRoute Tests', () => {
   let signInAPI
   let signInStore
   let role
   beforeEach(() => {
      // signInAPI = new SignInAPI()
      signInAPI = new SignInFixture()
      signInStore = new SignInStore(signInAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole, debug, queryAllByText } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute signInStore={signInStore} />
         </Router>
      )
      const usernameField = getByRole('textbox')

      expect(usernameField).toBeInTheDocument()
      const signInButton = getByRole('button', { name: 'Login' })
      fireEvent.click(signInButton)
      // expect(usernameField).toHaveAttribute('type', 'text')
      queryAllByText(/Required Field/i)
   })

   it('should render password empty error message', () => {
      const {
         getByText,
         getAllByText,
         getByRole,
         getByDisplayValue,
         debug,
         getByTestId
      } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute signInStore={signInStore} />
         </Router>
      )
      const username = 'test-user'
      const signInButton = getByRole('button', { name: 'Login' })
      const usernameField = getByRole('textbox', { type: 'text' })
      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(signInButton)
      getByText(/Required Field/i)
   })

   it('should submit sign-in on press enter', async () => {
      const { getByTestId, getByRole, getByText } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute signInStore={signInStore} />
         </Router>
      )
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const signInButton = getByRole('button', { name: 'Login' })
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInResponse)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      signInAPI.signInAPI = mockSignInAPI
      await signInStore.userSignIn(requestObject, onSuccess, onFailure)

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)
      role = signInStore.role
      getByRole('button', { disabled: true })
   })
   it('should render signInRoute success state for user Page', async () => {
      const history = createMemoryHistory()
      const route = SIGN_IN_PATH
      history.push(route)
      const { getByRole, queryByRole, getByTestId, debug } = render(
         <Provider signInStore={signInStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <SignInRoute />
               </Route>
               <Route path={USER_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const signInButton = getByRole('button', { name: 'Login' })

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInResponse)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      signInAPI.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)

      await (() => {
         expect(
            queryByRole('button', { name: 'Login' })
         ).not.toBeInTheDocument()
         expect(getByTestId('location-display')).toHaveTextContent(USER_PATH)
      })
   })

   it('should render signInRoute success state for rp Page', async () => {
      const history = createMemoryHistory()
      const route = SIGN_IN_PATH
      history.push(route)
      const { getByRole, queryByRole, getByTestId, debug } = render(
         <Provider signInStore={signInStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <SignInRoute />
               </Route>
               <Route path={RP_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      const username = 'test-user'
      const password = 'test-password'
      const signInFixture={
         "access_token": "f5af9f51-07e6-4332-8f1a-c0c11c1e3434",
         "role": "rp"
       }
      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const signInButton = getByRole('button', { name: 'Login' })

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(signInFixture)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      signInAPI.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)

      await (() => {
         expect(
            queryByRole('button', { name: 'Login' })
         ).not.toBeInTheDocument()
         expect(getByTestId('location-display')).toHaveTextContent(RP_PATH)
      })
   })
   it('should render signInRoute failure state', async () => {
      const {
         getByText,
         getByPlaceholderText,
         getByTestId,
         getByRole,
         debug
      } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute signInStore={signInStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const signInButton = getByRole('button', { name: 'Login' })

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      }).catch(() => {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      signInAPI.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)

      await (() => {
         getByText(/Network Error/i)
      })
   })
})
