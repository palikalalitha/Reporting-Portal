import React, { Component } from 'react';
import { InPutTextBox } from "./styledComponents";

class InputElement extends Component {
    render() {
        const {type,borderStyles}=this.props
        return (
              <InPutTextBox type={type} borderStyles={borderStyles}/>
            
        );
    }
}

export {InputElement};