

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

import { USER_CREATION_FORM, USER_PATH } from '../../constants/RouteConstants'
import { UserServiceAPI } from '../../services/UserService/UserService.api'
import UserService from '../../services/UserService/UserService.fixture'
import { UserStore } from '../../stores/UserStore'
import { SignInStore } from '../../../SignInModule/stores/SignInStore/SignInStore'

import getUserSignInResponse from '../../../SignInModule/fixtures/getUserSignInResponse.json'

import { SignInFixture } from '../../../SignInModule/services/SignInServices/SignIn.fixture'

import { UserRoute } from '.'

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
   it("should test logout api in userpage",async()=>
   {
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
      expect(onSuccess).toBeCalled()

      const { getByText, getByRole,getByTestId, debug, queryAllByText } = render(
         <Router history={createMemoryHistory()}>
            <UserRoute signInStore={signInStore} />
         </Router>
      )

      const logoutButton=getByTestId("logout")
      expect(logoutButton).toBeInTheDocument()
     // debug()
     console.log(signInStore.role)
   })

   // it('should render the user from ', async () => {

   //    const history = createMemoryHistory()
   //    const route = USER_PATH
   //    history.push(route)
   //    const { getByRole, getByTestId } = render(
   //       <Provider signInStore={signInStore}>
   //          <Router history={history}>
   //             <Route path={USER_CREATION_FORM}>
   //                <LocationDisplay />
   //             </Route>
   //             <Route path={USER_PATH}>
   //                <UserRoute />
   //             </Route>
   //          </Router>
   //       </Provider>
   //    )
   //    await userStore.getObservationList()
   //    await waitFor(()=>
   //    {
   //       getByRole('button', { name: '+ Add New' })
   //    })
   //    const addNewButton = getByRole('button', { name: '+ Add New' })
   //    fireEvent.click(addNewButton)

   //    await (() => {
   //       expect(getByTestId('location-display')).toHaveTextContent(
   //          USER_CREATION_FORM
   //       )
   //    })
   // })
})
