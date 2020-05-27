import React, { Component } from 'react';
import {Select,Option,OptionContainer} from "./styledComponents"
class DropDownList extends Component {
    render() {
        const {optionsList}=this.props
        return (
            <Select>
                <Option>All</Option>
                {optionsList.map(eachOption=>
                <Option key={eachOption}>{eachOption}</Option>)}
            </Select>
                );
    }
}

export { DropDownList};