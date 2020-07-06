import React, { Component } from 'react'
import { observer } from 'mobx-react'

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

import {
   SignInContainer,
   WelcomeMessage,
   Label,
   SignUPLink,
   NewAccount,
   ErrorMessage,
   Wrapper,
   Container
} from './styledComponents'
import { ValidateUserName, ValidatePassword } from '../../utils/validationUtil'

@observer
class SignInForm extends Component {
   usernameRef = React.createRef()
   passwordRef = React.createRef()
   loginRef = React.createRef()
   render() {
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
         apiError,
         t
      } = this.props

      return (
         <Container>
            <SignInContainer>
               <Image type={LOGO} imageURL={imageURL} />
               <WelcomeMessage>
                  {t('signin:signInPageStrings.welcomeMessage')}
               </WelcomeMessage>

               <Wrapper>
                  <Label htmlFor={USERNAME}>
                     {t('signin:signInPageStrings.userName')}
                  </Label>
                  <InputElement
                     forwardRef={this.usernameRef}
                     type={TYPE_TEXT}
                     testid={USERNAME}
                     value={username}
                     status={errorMessageForUsername}
                     validateInputElements={ValidateUserName}
                     onChangeHandler={onChangeUsername}
                  />
                  {/* <ErrorMessage status={errorMessageForUsername}>
                     {errorMessageForUsername}
                  </ErrorMessage> */}
               </Wrapper>
               <Wrapper>
                  <Label htmlFor={PASSWORD}>
                     {t('signin:signInPageStrings.password')}
                  </Label>
                  <InputElement
                     validateInputElements={ValidatePassword}
                     forwardRef={this.passwordRef}
                     type={TYPE_PASSWORD}
                     testid={PASSWORD}
                     value={userpassword}
                     status={errorMessageForPassword}
                     onChangeHandler={onChangePassword}
                  />
                  {/* <ErrorMessage status={errorMessageForPassword}>
                     {errorMessageForPassword}
                  </ErrorMessage> */}
               </Wrapper>

               <Button
                  buttonRef={this.loginRef}
                  buttonType={PRIMARY}
                  buttonStatus={apiStatus === LOADING ? true : false}
                  onClickHandler={onClickSignIn}
                  buttonText={LOGIN}
               />
               <ErrorMessage>{errorMessage}</ErrorMessage>
               <NewAccount>
                  {t('signin:signInPageStrings.noAccount')}
                  <SignUPLink>
                     {t('signin:signInPageStrings.signUp')}
                  </SignUPLink>
               </NewAccount>
            </SignInContainer>
         </Container>
      )
   }
}

export { SignInForm }
