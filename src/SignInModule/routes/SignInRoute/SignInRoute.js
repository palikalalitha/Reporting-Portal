import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import { USER_PATH } from '../../../UserModule/constants/RouteConstants'
import { RP_PATH } from '../../../RPModule/constants/RPRouteConstants/RPRouteConstants'

import { SignInForm } from '../../components/SigninForm/'
import {
   NETWORK_ERROR,
   REQUIRED_FIELD,
   LOADING,
   EMPTY_STRING
} from '../../constants/SigninPageConstants.js'

import { SIGN_IN_PATH } from '../../constants/RouteConstants'
import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'

@inject('signInStore')
@observer
class SignInRoute extends React.Component {
   @observable username
   @observable password
   @observable errorMessageForUsername
   @observable errorMessageForPassword
   @observable errorMessage

   constructor() {
      super()
      this.init()
   }

   init() {
      this.username = EMPTY_STRING
      this.password = EMPTY_STRING
      this.errorMessageForUsername = EMPTY_STRING
      this.errorMessageForPassword = EMPTY_STRING
      this.errorMessage = EMPTY_STRING
   }

   onChangeUsername = event => {
      this.username = event.target.value
      this.errorMessageForUsername = EMPTY_STRING
      this.errorMessage = EMPTY_STRING
      this.errorMessageForPassword = EMPTY_STRING
   }

   onChangePassword = event => {
      this.password = event.target.value
      this.errorMessageForPassword = EMPTY_STRING
      this.errorMessageForUsername = EMPTY_STRING
      this.errorMessage = EMPTY_STRING
   }

   onSuccess = () => {
      const { role,access_token } = this.props.signInStore
      if (role==='user') 
      this.props.history.replace(USER_PATH, role)
      }

   onFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props.signInStore
      if (apiError !== undefined || apiError != null) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
   }
   onClickSignIn = () => {
      if(this.username===EMPTY_STRING)
      {
         this.errorMessageForUsername = REQUIRED_FIELD
      }
      if (this.password === EMPTY_STRING) {
         this.errorMessageForPassword = REQUIRED_FIELD
      }
       else if (this.username !== EMPTY_STRING ||
         this.password !== EMPTY_STRING) {
         this.handleSignIn()
      }
   }
   handleSignIn = async () => {
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
         onChangeUsername,
         onChangePassword,
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
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
            apiStatus={getUserSignInAPIStatus}
            apiError={getUserSignInAPIError}
         />
      )
   }
}
export default withRouter(SignInRoute)
