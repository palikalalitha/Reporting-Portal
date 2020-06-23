import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import { SignInForm } from '../../components/SigninForm'
import {
   REQUIRED_FIELD,
   EMPTY_STRING
} from '../../constants/SigninPageConstants'
import { gotoUserPage, gotoRPPage } from '../../utils/NavigationUtils'

import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'
import {SignInStore} from "../../stores/SignInStore/SignInStore"

interface SignInRouteProps{
   signInStore:SignInStore
   history:Object
}

@inject('signInStore')
@observer
class SignInRoute extends React.Component<SignInRouteProps> {
   @observable username:string=""
   @observable password:string=""
   @observable errorMessageForUsername:string=""
   @observable errorMessageForPassword:string=""
   @observable errorMessage:string=""

   constructor(props) {
      super(props)
      this.init()
   }

   init() {
      this.username = EMPTY_STRING
      this.password = EMPTY_STRING
      this.errorMessageForUsername = EMPTY_STRING
      this.errorMessageForPassword = EMPTY_STRING
      this.errorMessage = EMPTY_STRING
   }

   onChangeUsernameField=(event: { target: { value: string } }):void=> {
      this.username = event.target.value
      this.errorMessageForUsername = EMPTY_STRING
      this.errorMessage = EMPTY_STRING
      this.errorMessageForPassword = EMPTY_STRING
   }

   onChangePasswordField=(event: { target: { value: string } }):void=>{
      this.password = event.target.value
      this.errorMessageForPassword = EMPTY_STRING
      this.errorMessageForUsername = EMPTY_STRING
      this.errorMessage = EMPTY_STRING
   }

   onSuccess = () => {
      const { role } = this.props.signInStore
      const { history } = this.props
      if (role === 'user') gotoUserPage(history, role)
      else if (role === 'rp') gotoRPPage(history, role)
   }

   onFailure = ()=> {
      const { getUserSignInAPIError: apiError } = this.props.signInStore
      if (apiError !== undefined || apiError != null) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
   }
   onClickSignIn = () => {
      if (this.username === EMPTY_STRING) {
         this.errorMessageForUsername = REQUIRED_FIELD
      }
      if (this.password === EMPTY_STRING) {
         this.errorMessageForPassword = REQUIRED_FIELD
      } else if (
         this.username !== EMPTY_STRING ||
         this.password !== EMPTY_STRING
      ) {
         this.handleSignIn()
      }
   }
   handleSignIn = async ()=>  {
      const { userSignIn } = this.props.signInStore
      await userSignIn(
         {
            user_name: this.username,
            password: this.password
         },
         this.onSuccess,
         this.onFailure
      )
   }

   render() {
      const {
         getUserSignInAPIStatus,
         getUserSignInAPIError
      } = this.props.signInStore
      const {
         username,
         password,
         onClickSignIn,
         onChangeUsernameField,
         onChangePasswordField,
         errorMessage,
         errorMessageForUsername,
         errorMessageForPassword
      } = this
      return (
         <SignInForm
            errorMessageForUsername={errorMessageForUsername}
            errorMessageForPassword={errorMessageForPassword}
            errorMessage={errorMessage}
            username={username}
            userpassword={password}
            onClickSignIn={onClickSignIn}
            onChangePassword={onChangePasswordField}
            onChangeUsername={onChangeUsernameField}
            apiStatus={getUserSignInAPIStatus}
            apiError={getUserSignInAPIError}
         />
      )
   }
}
export default withRouter(SignInRoute)
