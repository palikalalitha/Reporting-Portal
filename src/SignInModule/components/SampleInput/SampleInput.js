import React, { Component } from 'react';

import { observer } from "mobx-react";
import {TextBox} from "../../../common/components/TextBox/TextBox"
import { observable } from "mobx";
@observer
class SampleInput extends Component {
    @observable username=""
    onChange=(value)=>
    {
        this.username=value 
    }
    render() {
        return (
          <TextBox 
           type={"text"}
           testid={"username"}
           value={this.username}
           onChangeHandler={this.onChange}
           />
          
        )
    }
}

export default SampleInput;