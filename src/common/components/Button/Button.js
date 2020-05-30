import React, { Component } from 'react';

import {ButtonElement,Label} from "./styledComponents"
import { observer } from "mobx-react";

class Button extends Component{
    static defaultProps={
        buttonText:"",
        buttonType:"",
        
    }
    render() {
        const {buttonText,buttonType,onClickHandler,buttonStatus}=this.props
        return (    
        <ButtonElement  onClick={onClickHandler} buttonType={buttonType}>
            <Label>{buttonText}</Label>
        </ButtonElement>                      
        );
    }
}

export { Button};