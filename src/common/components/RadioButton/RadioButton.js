import React, { Component } from 'react';

import {InputTypeRadioButton,Label} from "./styledComponents"
class RadioButton extends Component {
    render() {
        const {list}=this.props
        return (
            <>
            {list.map(eachItem=>          
           <><InputTypeRadioButton type="radio" name="gender" checked value={eachItem}/><Label>{eachItem}</Label></>)}
           </>

        );
    }
}

export { RadioButton};