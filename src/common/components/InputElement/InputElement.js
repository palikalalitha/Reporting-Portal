import React, { Component } from 'react';
import { InPutTextBox } from "./styledComponents";

class InputElement extends Component {
    render() {
        const {type,borderStyles,value,onChangeHandler}=this.props
        return (
              <InPutTextBox type={type} defaultValue={value} onChange={onChangeHandler} borderStyles={borderStyles}/>
            
        );
    }
}

export {InputElement};