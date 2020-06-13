import React from 'react'

import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'

import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'

import { SignInRoute } from '.'
import { SIGN_IN_PATH } from '../../constants/RouteConstants'

import { USER_PATH } from '../../../UserModule/constants/RouteConstants'
import { SignInAPI } from '../../services/SignInAPI/SignIn.api'
import { SignInStore } from '../../stores/SignInStore/'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))
describe('SignInRoute Tests', () => {
   let signInAPI
   let signInStore
   beforeEach(() => {
      signInAPI = new SignInAPI()
      signInStore = new SignInStore(signInAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole, debug } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute signInStore={signInStore} />
         </Router>
      )
      const usernameField = getByRole('textbox')

      expect(usernameField).toBeInTheDocument()
      const signInButton = getByRole('button', { name: 'Login' })
      fireEvent.click(signInButton)
      expect(usernameField).toHaveAttribute('type', 'text')
      getByText(/Required Field/i)
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

   it('should submit sign-in on press enter', () => {
      const { getByTestId, getByRole, getByText } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute signInStore={signInStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const signInButton = getByRole('button', { name: 'Login' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)
      getByRole('button', { name: '',disabled:true})
   })
   // it('should render signInRoute success state', async () => {
   //    const history = createMemoryHistory()
   //    const route = SIGN_IN_PATH
   //    history.push(route)

   //    const { getByRole, queryByRole, getByTestId, debug } = render(
   //       <Provider signInStore={signInStore}>
   //          <Router history={history}>
   //             <Route path={SIGN_IN_PATH}>
   //                <SignInRoute />
   //             </Route>
   //             <Route path={USER_PATH}>
   //                <LocationDisplay />
   //             </Route>
   //          </Router>
   //       </Provider>
   //    )

   //    const username = 'test-user'
   //    const password = 'test-password'

   //    const usernameField = getByTestId('username')
   //    const passwordField = getByTestId('password')
   //    const signInButton = getByRole('button', { name: 'Login' })

   //    const mockSuccessPromise = new Promise(function(resolve, reject) {
   //       resolve(getUserSignInResponse)
   //    })
   //    const mockSignInAPI = jest.fn()
   //    mockSignInAPI.mockReturnValue(mockSuccessPromise)
   //    signInAPI.signInAPI = mockSignInAPI

   //    fireEvent.change(usernameField, { target: { value: username } })
   //    fireEvent.change(passwordField, { target: { value: password } })
   //    fireEvent.click(signInButton)

   //    await (() => {
   //       expect(
   //          queryByRole('button', { name: 'Login' })
   //       ).not.toBeInTheDocument()

   //       expect(getByTestId('location-display')).toHaveTextContent(USER_PATH)
   //    })
   // })
   // it('should render signInRoute failure state', async () => {
   //    const {
   //       getByText,
   //       getByPlaceholderText,
   //       getByTestId,
   //       getByRole,
   //       debug
   //    } = render(
   //       <Router history={createMemoryHistory()}>
   //          <SignInRoute signInStore={signInStore} />
   //       </Router>
   //    )
   //    const username = 'test-user'
   //    const password = 'test-password'

   //    const usernameField = getByTestId('username')
   //    const passwordField = getByTestId('password')
   //    const signInButton = getByRole('button', { name: 'Login' })

   //    const mockFailurePromise = new Promise(function(resolve, reject) {
   //       reject(new Error('error'))
   //    }).catch(() => {})
   //    const mockSignInAPI = jest.fn()
   //    mockSignInAPI.mockReturnValue(mockFailurePromise)
   //    signInAPI.signInAPI = mockSignInAPI

   //    fireEvent.change(usernameField, { target: { value: username } })
   //    fireEvent.change(passwordField, { target: { value: password } })
   //    fireEvent.click(signInButton)

   //    await (() => {
   //       getByText(/Network Error/i)
   //    })
   // })
})
