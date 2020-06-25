import React, { Component } from 'react'
import { APIStatus } from "@ib/api-constants"

import { Button } from '../../../common/components/Button'
import { InputElement } from '../../../common/components/InputElement'
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

interface SignInFormProps {
   username: string
   userpassword: string
   errorMessage:string
 
   errorMessageForPassword:string
   errorMessageForUsername:string

   apiStatus:APIStatus
   apiError:Error|null
  
   onChangeUsername:(event: { target: { value: string } })=>void
   onChangePassword:(event: { target: { value: string } })=>void
   onClickSignIn: () => void
  
}
class SignInForm extends Component<SignInFormProps> {
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
                  <ErrorMessage>
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
                  <ErrorMessage>
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
