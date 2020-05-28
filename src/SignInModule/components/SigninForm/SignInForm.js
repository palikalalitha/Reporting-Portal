import React, { Component } from 'react';
 import { SignInContainer,WelcomMessage,Label,SignUPLink,NewAccount,ErrorMessage,Wrapper,Container} from "./styledComponents";
import { imageURL } from "../../constants/SigninPageConstants";
import { InputElement } from "../../../common/components/InputElement";
import { Button } from "../../../common/components/Button";
import i18n from "../../i18n/strings.json"
import {Image} from "../../../common/components/Image/"
import { observer } from "mobx-react";
@observer
class SignInForm extends Component {
    render() {
        const {welcomeMessage,userName,password,noAccount,signUp}=i18n.signInPageStrings
        const {username,userpassword,errorMessage,onClickSignIn,onFailure,onSuccess,
            onChangeUsername,onChangePassword,status}=this.props
        return (
            <Container>
                <SignInContainer>
                    <Image type="logo" imageURL={imageURL}/>
                    <WelcomMessage>{welcomeMessage}</WelcomMessage>
                    <Wrapper>
                    <Label>{userName}</Label>
                    <InputElement type="text" value={username} onChangeHandler={onChangeUsername} />
                    </Wrapper>
                    <Wrapper><Label>{password}</Label>
                    <InputElement type="password" value={userpassword} onChangeHandler={onChangePassword}/>
                    </Wrapper>
                
                    <Button type="primary" onClickHandler={onClickSignIn} buttonText="Login"/>
                    <ErrorMessage status={errorMessage}>{errorMessage}</ErrorMessage>
                    
                    <NewAccount>
                        {noAccount}
                        <SignUPLink>{signUp}</SignUPLink>
                    </NewAccount>
                </SignInContainer>
            </Container>
        );
    }
}

export { SignInForm};