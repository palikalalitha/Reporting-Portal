import React from 'react'

import {
   render,
   fireEvent,
   getByDisplayValue,
   getByTestId,
   waitFor
} from '@testing-library/react'

import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'

import { USER_CREATION_FORM, USER_PATH } from '../../constants/RouteConstants'
import { UserRoute } from './UserFormRoute'
import { UserForm } from '../../components/UserForm/UserForm'

import UserService from '../../services/UserService/UserService.fixture'
import { UserStore } from '../../stores/UserStore'

import UserFormRoute from './UserFormRoute'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))
describe('UserFormRoute Tests', () => {
   let userService
   let userStore
   let signInStore
   let signInService
   beforeEach(() => {
      // userService = new UserServiceAPI()
      userService = new UserService()
      userStore = new UserStore(userService)
   })
   it('should render  error message', async () => {
      const { getByText, getByTestId, getByRole, debug, getAllByText } = render(
         <Provider userStore={userStore}>
            <Router history={createMemoryHistory()}>
               <UserFormRoute />
            </Router>
         </Provider>
      )
      await waitFor(() => {
         getByTestId('title')
      })
      const title = getByTestId('title')
      expect(title).toBeInTheDocument()
      const submitButton = getByRole('button', { name: 'Submit' })
      expect(submitButton).toBeInTheDocument()
      fireEvent.click(submitButton)
      getAllByText(/Enter Required Field/i)
   })
   it('should render  onChange function for title', async () => {
      const { getByText, getByTestId, getByRole, debug, getAllByText } = render(
         <Provider userStore={userStore}>
            <Router history={createMemoryHistory()}>
               <UserFormRoute />
            </Router>
         </Provider>
      )
      await waitFor(() => {
         getByTestId('title')
      })
      const titleText = 'test-title'
      const title = getByTestId('title')

      expect(title).toBeInTheDocument()

      fireEvent.change(title, { target: { value: titleText } })
      const submitButton = getByRole('button', { name: 'Submit' })

      expect(submitButton).toBeInTheDocument()
      fireEvent.click(submitButton)

      getAllByText(/Enter Required Field/i)
   })
   // it('should render sverity field error message', async() => {
   //    const { getByText, getByTestId, getByRole } = render(
   //       <Provider userStore={userStore}>
   //          <Router history={createMemoryHistory()}>
   //          <UserFormRoute />
   //       </Router>
   //    </Provider>
   //    )
   //    await waitFor(()=>
   //    {
   //       getByTestId('severity')
   //       getByTestId("title")
   //    })
   //    const severityField = getByTestId('severity')
   //    const title = getByTestId('title')

   //    expect(severityField).toBeInTheDocument()
   //    fireEvent.change(title, { target: { value: "water" } })

   //    const submitButton = getByRole('button', { name: 'Submit' })
   //    expect(submitButton).toBeInTheDocument()
   //    fireEvent.click(submitButton)
   //    getByText(/Enter Required Field/i)
   // })
   // it('should render description field error message', () => {
   //    const { getByText, getByTestId, getByRole } = render(
   //       <Router history={createMemoryHistory()}>
   //          <UserFormRoute />
   //       </Router>
   //    )

   //    const descriptionField = getByTestId('description')

   //    expect(descriptionField).toBeInTheDocument()

   //    const submitButton = getByRole('button', { name: 'Submit' })
   //    expect(submitButton).toBeInTheDocument()

   //    fireEvent.click(submitButton)
   //    getByText(/Enter Required Field/i)
   // })
   // it('should test user form page ', () => {
   //    const { getByText } = render(
   //       <Router history={createMemoryHistory()}>
   //          <UserFormRoute />
   //       </Router>
   //    )

   //    getByText('Back To Observation')
   // })

   // it("should render   the user observation ", () => {
   //     const { getByText,getByLabelText,getByDisplayValue,getByTestId, getByRole,debug } = render(
   //         <Router history={createMemoryHistory()}>
   //                     <UserFormRoute  />
   //                       </Router>
   //     );

   //     const backButton=getByTestId("back")

   //     expect(backButton).toBeInTheDocument()

   // });
})
