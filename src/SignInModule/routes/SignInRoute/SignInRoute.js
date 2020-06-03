import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import { USER_PATH } from '../../../UserModule/constants/RouteConstants'

import { SignInForm } from '../../components/SigninForm/'
import {
   USERNAME_ERROR_MESSAGE,
   PASSWORD_ERROR_MESSAGE,
   NETWORK_ERROR,
   LOADING,
   EMPTY_STRING
} from '../../constants/SigninPageConstants.js'

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
      this.errorMessageForPassword = EMPTY_STRING
   }

   onChangePassword = event => {
      this.password = event.target.value
      this.errorMessageForPassword = EMPTY_STRING
   }

   onSuccess = () => {
      this.props.history.push(USER_PATH)
   }

   onFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props.signInStore
      if (apiError !== undefined || apiError != null) {
         this.errorMessage = NETWORK_ERROR
      }
   }
   onClickSignIn = () => {
      if (this.username === EMPTY_STRING || this.username === undefined) {
         this.errorMessageForUsername = USERNAME_ERROR_MESSAGE
       
      } 
       if ( this.password === EMPTY_STRING ||this.password === undefined) {
          
         this.errorMessageForPassword = PASSWORD_ERROR_MESSAGE
      } else
       if(this.username!==EMPTY_STRING&&this.password!==EMPTY_STRING) {
         this.errorMessage = LOADING
         this.handleSignIn()
      }
   }
   handleSignIn = async () => {
      console.log(this.props.signInStore)
      await this.props.signInStore.userSignIn(
         {
            username: this.username,
            password: this.password
         },
         this.onSuccess,
         this.onFailure
      )
   }

   render() {
      const { getUserSignInAPIStatus ,getUserSignInAPIError} = this.props.signInStore
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
