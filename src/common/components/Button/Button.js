import React, { Component } from 'react';
import {ButtonElement,Label} from "./styledComponents"
class Button extends Component {
    
    render() {
        const {buttonText,type,onClickHandler}=this.props
        return (    
        <ButtonElement onClick={onClickHandler} type={type}><Label>{buttonText}</Label></ButtonElement>                      
        );
    }
}

export { Button};