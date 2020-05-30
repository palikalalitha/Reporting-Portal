import React, { Component } from 'react';

import {ButtonElement,Label} from "./styledComponents"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Button extends Component{
    static defaultProps={
        buttonText:"",
        buttonStatus:false,
        buttonType:"",
        
    }
    render() {
        const {buttonText,buttonType,onClickHandler,buttonStatus}=this.props
        return (    
        <ButtonElement  onClick={onClickHandler} buttonType={buttonType}>
            <Label>
            <Loader
         type="Rings"
         color="#00BFFF"
         height={100}
         width={100}/>{buttonText}</Label>
        </ButtonElement>                      
        );
    }
}

export { Button};