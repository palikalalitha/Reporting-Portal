import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Loader from 'react-loader'
import { InputElement } from '../../../common/components/InputElement'
import { Button } from '../../../common/components/Button'
import { Image } from '../../../common/components/Image/'

import {
   imageURL,
   USERNAME,
   PASSWORD,
   TYPE_PASSWORD,
   TYPE_TEXT,
   LOGO,
   PRIMARY,
   LOGIN,
   LOADING
} from '../../constants/SigninPageConstants'
import i18n from '../../i18n/strings.json'

import {
   SignInContainer,
   WelcomMessage,
   Label,
   SignUPLink,
   NewAccount,
   ErrorMessage,
   Wrapper,
   Container
} from './styledComponents'

class SignInForm extends Component {
   render() {
      const {
         welcomeMessage,
         userName,
         password,
         noAccount,
         signUp
      } = i18n.signInPageStrings

      const {
         username,
         userpassword,
         errorMessage,
         onClickSignIn,
         errorMessageForPassword,
         errorMessageForUsername,
         onChangeUsername,
         onChangePassword,
         apiStatus,
         apiError
      } = this.props

      return (
         <Container>
            <SignInContainer>
               <Image type={LOGO} imageURL={imageURL} />
               <WelcomMessage>{welcomeMessage}</WelcomMessage>
               <Wrapper>
                  <Label>{userName}</Label>
                  <InputElement
                     type={TYPE_TEXT}
                     testid={USERNAME}
                     value={username}
                     status={errorMessageForUsername}
                     onChangeHandler={onChangeUsername}
                  />
                  <ErrorMessage status={errorMessageForUsername}>
                     {errorMessageForUsername}
                  </ErrorMessage>
               </Wrapper>
               <Wrapper>
                  <Label>{password}</Label>
                  <InputElement
                     type={TYPE_PASSWORD}
                     testid={PASSWORD}
                     value={userpassword}
                     status={errorMessageForPassword}
                     onChangeHandler={onChangePassword}
                  />
                  <ErrorMessage status={errorMessageForPassword}>
                     {errorMessageForPassword}
                  </ErrorMessage>
               </Wrapper>

               <Button
                  buttonType={PRIMARY}
                  buttonStatus={apiStatus === LOADING ? true : false}
                  onClickHandler={onClickSignIn}
                  buttonText={LOGIN}
               />
               <ErrorMessage>{errorMessage}</ErrorMessage>
               <NewAccount>
                  {noAccount}
                  <SignUPLink>{signUp}</SignUPLink>
               </NewAccount>
            </SignInContainer>
         </Container>
      )
   }
}

export { SignInForm }
