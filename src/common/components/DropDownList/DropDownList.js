import React, { Component } from 'react';
import {Select,Option,OptionContainer} from "./styledComponents"
class DropDownList extends Component {
    render() {
        const {optionsList,onChangeHandler,value,status}=this.props
      
        return (
            <Select status={status} onChange={onChangeHandler} value={value}>
                <Option>All</Option>
                {optionsList.map(eachOption=>
                <Option key={eachOption} value={eachOption}>{eachOption}</Option>)}
            </Select>
                );
    }
}

export { DropDownList};