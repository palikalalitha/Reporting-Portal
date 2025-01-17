import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'

import { USER_CREATION_FORM, USER_PATH } from '../../constants/RouteConstants'
import { UserServiceAPI } from '../../services/UserService/UserService.api'
import UserService from '../../services/UserService/UserService.fixture'
import { UserStore } from '../../stores/UserStore'
import { SignInStore } from '../../../SignInModule/stores/SignInStore/SignInStore'

import { SignInFixture } from '../../../SignInModule/services/SignInFixture/SignIn.fixture'

import { UserRoute } from '.'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))
describe('UserRoute Tests', () => {
   let userService
   let userStore
   let signInStore
   let signInService
   beforeEach(() => {
      // userService = new UserServiceAPI()
      userService = new UserService()
      signInService = new SignInFixture()
      userStore = new UserStore(userService)
      signInStore = new SignInStore(signInService)
   })
   //    it('should render the user from ', async () => {
   //       const history = createMemoryHistory()
   //       const route = USER_PATH
   //       history.push(route)

   //       const { getByRole, getByTestId } = render(
   //          <Provider signInStore={signInStore}>
   //             <Router history={history}>
   //                <Route path={USER_CREATION_FORM}>
   //                   <LocationDisplay />
   //                </Route>
   //                <Route path={USER_PATH}>
   //                   <UserRoute />
   //                </Route>
   //             </Router>
   //          </Provider>
   //       )
   //       await userStore.getObservationList()
   //       await waitFor(()=>
   //       {
   //          getByRole('button', { name: '+ Add New' })
   //       })
   //       const addNewButton = getByRole('button', { name: '+ Add New' })
   //       fireEvent.click(addNewButton)

   //       await (() => {
   //          expect(getByTestId('location-display')).toHaveTextContent(
   //             USER_CREATION_FORM
   //          )
   //       })
   //    })
})
