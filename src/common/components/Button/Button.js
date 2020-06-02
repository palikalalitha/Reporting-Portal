import React, { Component } from 'react';

import {ButtonElement,Label} from "./styledComponents"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Button extends Component{
    static defaultProps={
        buttonText:"",
        buttonStatus:false,
        buttonType:"",
        onClickHandler:()=>{}
        
    }
    render() {
        const {buttonText,buttonType,onClickHandler,buttonStatus,roleType,className}=this.props
        return (    
        <ButtonElement  onClick={onClickHandler} roleType={roleType} className={className} buttonType={buttonType}>
            {/* <Label className={className}> */}
        {buttonStatus?<Loader
         type="Oval"
         color="White"
         height={25}
         width={20}/>:buttonText}
         {/* </Label>  */}
        </ButtonElement>                      
        );
    }
}

export { Button};