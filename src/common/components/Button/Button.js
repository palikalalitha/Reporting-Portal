import React, { Component } from 'react';
import {ButtonElement,Label} from "./styledComponents"
class Button extends Component {
    render() {
        const {buttonText,type,handleSignIn}=this.props
        return (    
        <ButtonElement onClick={handleSignIn} type={type}><Label>{buttonText}</Label></ButtonElement>                      
        );
    }
}

export { Button};