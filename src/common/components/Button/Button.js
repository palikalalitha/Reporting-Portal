import React, { Component } from 'react';
import {ButtonElement,Label} from "./styledComponents"
class Button extends Component {
    render() {
        const {buttonText,type}=this.props
        return (    
        <ButtonElement type={type}><Label>{buttonText}</Label></ButtonElement>                      
        );
    }
}

export { Button};