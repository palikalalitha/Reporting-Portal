import React from "react"
import { observable } from "mobx"
import { observer, inject } from "mobx-react"
import { withRouter } from "react-router-dom"

import {USER_PATH} from "../../../UserModule/constants/RouteConstants"

import {SignInForm} from "../../components/SigninForm/"
import {
    USERNAME_ERROR_MESSAGE,
    PASSWORD_ERROR_MESSAGE,
    NETWORK_ERROR,
    LOADING
}
from "../../constants/SigninPageConstants.js"


@inject("signInStore")
@observer
class SignInRoute extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
    constructor() {
        super()
        this.init()    
    }

    init() {
        this.username = "";
        this.password = "";
        this.errorMessage = ""
    }

    onChangeUsername = (event) => {
        this.username = event.target.value
        this.errorMessage = ""

    }

    onChangePassword = (event) => {
         this.password = event.target.value
         this.errorMessage = ""
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
        if (this.username === "" || this.username === undefined) {
            this.errorMessage = USERNAME_ERROR_MESSAGE
        }
        else if (this.password === "" || this.password === undefined) {
            this.errorMessage = PASSWORD_ERROR_MESSAGE
         
        }
        else {
            this.errorMessage = LOADING
            this.handleSignIn()
        }
    }
    handleSignIn = async() => {
        await this.props.signInStore.userSignIn({
            username: this.username,
            password: this.password
        }, this.onSuccess, this.onFailure)

    }
    
    render() {
        const { getUserSignInAPIStatus } = this.props.signInStore
        const {username,password,onClickSignIn,
            onChangeUsername,onChangePassword,errorMessage}=this
        return (
          <SignInForm 
          errorMessage={errorMessage}
          username={username}
          userpassword={password}
          onClickSignIn={onClickSignIn}
          onChangePassword={onChangePassword}
          onChangeUsername={onChangeUsername}
          apiStatus={getUserSignInAPIStatus}/>
           )
    }

}
export default withRouter(SignInRoute);

