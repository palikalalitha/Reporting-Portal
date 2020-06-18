import React from 'react'
import {
   API_SUCCESS,
   API_INITIAL,
   API_FAILED,
   API_FETCHING
} from '@ib/api-constants'

import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'

import {
   USER_CREATION_FORM,
   USER_PATH,
   OBSERVATION_SCREEN
} from '../../constants/RouteConstants'
import { UserServiceAPI } from '../../services/UserService/UserService.api'
import UserService from '../../services/UserService/UserService.fixture'
import { UserStore } from '../../stores/UserStore'
import { SignInStore } from '../../../SignInModule/stores/SignInStore/SignInStore'

import getUserSignInResponse from '../../../SignInModule/fixtures/getUserSignInResponse.json'

import { SignInFixture } from '../../../SignInModule/services/SignInServices/SignIn.fixture'

import { UserRoute } from '.'
import { SIGN_IN_PATH } from '../../../SignInModule/constants/RouteConstants'

import observationList from '../../fixtures/getObservationList'
import UserFormRoute from '../UserFormRoute/UserFormRoute'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))
describe('UserRoute Tests', () => {
   let userService
   let userStore
   let signInStore
   let signInAPI
   beforeEach(() => {
      // userService = new UserServiceAPI()
      userService = new UserService()
      signInAPI = new SignInFixture()
      userStore = new UserStore(userService)
      signInStore = new SignInStore(signInAPI)
   })
   it('should test logout button in userpage', async () => {
      const { getByTestId, debug } = render(
         <Router history={createMemoryHistory()}>
            <UserRoute signInStore={signInStore} />
         </Router>
      )

      const logoutButton = getByTestId('logout')
      expect(logoutButton).toBeInTheDocument()
   })
   it('should test logout buttonAPI  in userpage', async () => {
      const history = createMemoryHistory()
      const route = USER_PATH
      history.push(route)
      const { getByTestId, debug } = render(
         <Provider signInStore={signInStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={USER_PATH}>
                  <UserRoute />
               </Route>
            </Router>
         </Provider>
      )

      const logoutButton = getByTestId('logout')
      expect(logoutButton).toBeInTheDocument()
      fireEvent.click(logoutButton)

      await (() => {
         getByTestId('location-display')
      })
      expect(getByTestId('location-display')).toHaveTextContent(SIGN_IN_PATH)
   })
   it('should render the user form ', async () => {
      const history = createMemoryHistory()
      const route = USER_PATH
      history.push(route, 'user')
      const { getByRole, getByTestId } = render(
         <Provider signInStore={signInStore}>
            <Router history={history}>
               <Route path={USER_CREATION_FORM}>
                  <LocationDisplay />
               </Route>
               <Route path={USER_PATH}>
                  <UserRoute />
               </Route>
            </Router>
         </Provider>
      )
      await userStore.getObservationList()

      const addNewButton = getByRole('button', { name: '+ Add New' })
      fireEvent.click(addNewButton)

      await (() => {
         getByTestId('location-display')
      })
      expect(getByTestId('location-display')).toHaveTextContent(
         USER_CREATION_FORM
      )
   })

   it('should render the observationDeatils form', async () => {
      const history = createMemoryHistory()
      const route = USER_PATH
      history.push(route, 'user')
      const { getAllByTestId, getByTestId, debug } = render(
         <Provider signInStore={signInStore}>
            <Router history={history}>
               <Route path={OBSERVATION_SCREEN}>
                  <LocationDisplay />
               </Route>
               <Route path={USER_PATH}>
                  <UserRoute />
               </Route>
            </Router>
         </Provider>
      )
      await userStore.getObservationList()

      const row = getAllByTestId('row')
      fireEvent.click(row[0])

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(observationList[1])
      })
      const ObservationId = 1

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      userService.getObservationDeatilsById = mockSignInAPI

      await userStore.getObservationDetailsById(2)
      expect(userStore.getObservationDetailsAPIStatus).toBe(API_SUCCESS)
      expect(userStore.getSingleObservationDetails).toBeDefined()
      await (() => {
         getByTestId('location-display')
      })
      expect(getByTestId('location-display')).toHaveTextContent(
         `${OBSERVATION_SCREEN}${ObservationId}`
      )
   })
   it('should test goBack button  in userpage', async () => {
      const history = createMemoryHistory()
      const route = USER_CREATION_FORM
      history.push(route)
      const { getByRole, getByTestId, getByText, debug } = render(
         <Provider signInStore={signInStore} userStore={userStore}>
            <Router history={history}>
               <Route path={USER_CREATION_FORM}>
                  <UserFormRoute />
               </Route>
               <Route path={USER_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      //    await waitFor (() => {
      //       getByTestId("back")
      //    })
      //    const goBackButton=getByTestId("back")
      //    expect(goBackButton).toBeInTheDocument()
      //    // await waitFor (() => {
      //    fireEvent.click(goBackButton)
      //    // })
      //   debug()
      // await (() => {
      //    getByTestId('location-display')
      // })

      // await waitFor (() => { expect(getByTestId('location-display')).toHaveTextContent(USER_PATH)})
   })
   it('should test logout buttonAPI  in userpage', async () => {
      const history = createMemoryHistory()
      const route = USER_PATH
      history.push(route)
      const { getByRole, getByTestId, debug } = render(
         <Provider signInStore={signInStore}>
            <Router history={history}>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
               <Route path={USER_PATH}>
                  <UserRoute />
               </Route>
            </Router>
         </Provider>
      )

      const logoutButton = getByTestId('logout')
      expect(logoutButton).toBeInTheDocument()
      fireEvent.click(logoutButton)

      await (() => {
         getByTestId('location-display')
      })
      expect(getByTestId('location-display')).toHaveTextContent(SIGN_IN_PATH)
   })
})
