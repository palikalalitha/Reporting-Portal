import React, { Component } from 'react';
import { SignInContainer,WelcomMessage } from "./styledComponents";
import { imageURL } from "../../constants/SigninPageConstants";
import { InputElement } from "../../../common/components/InputElement";
import { Button } from "../../../common/components/Button";
import i18n from "../../i18n/strings.json"
import {Image} from "../../../common/components/Image/"
class SignInForm extends Component {
    render() {
        const {welcomeMessage,userName,password,noAccount}=i18n.signInPageStrings
        
        return (
            <SignInContainer>
                <Image type="logo" imageURL={imageURL}/>
        <WelcomMessage>{welcomeMessage}</WelcomMessage>
        {userName}<InputElement/>
        {password}     <InputElement/>
                <Button type="primary" buttonText="Login"/>
            </SignInContainer>
        );
    }
}

export { SignInForm};