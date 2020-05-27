import React from "react"
import { observable,autorun } from "mobx"
import { observer, inject } from "mobx-react"
import { withRouter } from "react-router-dom"

import {
    USERNAME_REGEX,
    USERNAME_ERROR_MESSAGE,
    PASSWORD_ERROR_MESSAGE
}
from "../../constants/SigninPageConstants.js"

import {SignInForm} from "../../components/SigninForm/"

@inject("signInStore")
@observer
class SignInRoute extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
    siginPageRef=React.createRef();
   constructor() {
        super()
        this.init()    
    }
    componentDidMount()
    {
        //this.siginPageRef.current.userNameRef.current.focus()     
    }
    init() {
        this.username = "";
        this.password = "";
        this.errorMessage = ""
    }
    onChangeUsername = (event) => {
        this.username = event.target.value
        this.errorMessage = ""
        console.log(this.username)
    }
    onChangePassword = (event) => {
         this.password = event.target.value
         this.errorMessage = ""
    }

    onSuccess = () => {
        this.props.history.push("/reporting-portal/user-page")
    }
    onFailure = () => {
        const { getUserSignInAPIError: apiError } = this.props.signInStore
        if (apiError !== undefined || apiError != null) {
             this.errorMessage = "Network Error"
            // this.siginPageRef.current.passwordRef.current.focus()
        }
    }
    onClickSignIn = () => {
        if (this.username === "" || this.username === undefined) {
            this.errorMessage = USERNAME_ERROR_MESSAGE
           // this.siginPageRef.current.userNameRef.current.focus()
       
        }
        else if (this.password === "" || this.password === undefined) {
            this.errorMessage = PASSWORD_ERROR_MESSAGE
            //this.siginPageRef.current.passwordRef.current.focus()
       
        }
        else {
            this.errorMessage = "Loading"
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
        const {username,password,handleSignIn,onClickSignIn,onFailure,onSuccess,
            onChangeUsername,onChangePassword,errorMessage}=this
        return (
          <SignInForm 
          errorMessage={errorMessage}
          username={username}
          userpassword={password}
          handleSignIn={handleSignIn}
          onClickSignIn={onClickSignIn}
          onFailure={onFailure}
          onSuccess={onSuccess}
          onChangePassword={onChangePassword}
          onChangeUsername={onChangeUsername}
          apiStatus={getUserSignInAPIStatus}/>
           )
    }

}
export default withRouter(SignInRoute);

