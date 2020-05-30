import React, { Component } from 'react';
import { InPutTextBox } from "./styledComponents";
import { observer } from "mobx-react";

@observer
class InputElement extends Component {
    static defaultProps = {
            status:false ,
            testid:""
    }
    render() {
        const {type,borderStyles,value,onChangeHandler,status,testid}=this.props
        console.log(status)
      
        return (
              <InPutTextBox type={type} data-testid={testid} status={status} defaultValue={value}
               onChange={onChangeHandler} borderStyles={borderStyles}/>
            
        );
    }
}

export {InputElement};