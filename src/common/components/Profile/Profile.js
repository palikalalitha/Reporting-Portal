import React, { Component } from 'react';
import { Image } from "../Image/";
import { InputElement } from "../InputElement";
import { ProfileContainer ,ViewProfileData,WrapInPutElements} from "./styledComponents";
import { RadioButton } from "../RadioButton";

class Profile extends Component {
    render() {
        
        return (
            <ProfileContainer>
                <Image imageURL=
                "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/8b9ff190-f490-4211-b2dd-61f476cfeabd.svg"/>
                <ViewProfileData>
                    <WrapInPutElements>
                    FirstName<InputElement type={"text"}/>
                    JOBROLE<InputElement type={"text"}/>
                    </WrapInPutElements>
                    <WrapInPutElements>
                    EMAIL<InputElement type={"passowrd"}/>
                    DepartMent<InputElement type={"text"}/>
                    </WrapInPutElements>
                  <RadioButton/>
                </ViewProfileData>
            </ProfileContainer>
        );
    }
}

export { Profile};