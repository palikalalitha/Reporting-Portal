import React, { Component } from 'react';

import {InputTypeRadioButton,Label} from "./styledComponents"
import {RADIO,GENDER} from "../../constants/reportingPortalconstants"
class RadioButton extends Component {
    render() {
        const {list}=this.props
        return (
            <>
            {list.map(eachItem=>          
           <><InputTypeRadioButton type={RADIO} name={GENDER}
            checked value={eachItem}/><Label>{eachItem}</Label></>)}
           </>

        );
    }
}

export { RadioButton};