import React, { Component } from 'react';
import { InPutTextBox } from "./styledComponents";
import { observer } from "mobx-react";

@observer
class InputElement extends Component {
    static defaultProps = {
            status:true ,
            testid:""
    }
    render() {
        const {type,borderStyles,value,onChangeHandler,status,testid}=this.props
        return (
              <InPutTextBox type={type} data-testid={testid} status={status} defaultValue={value}
               onChange={onChangeHandler} borderStyles={borderStyles}/>
            
        );
    }
}

export {InputElement};