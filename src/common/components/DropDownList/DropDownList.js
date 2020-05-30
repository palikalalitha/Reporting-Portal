import React, { Component } from 'react';
import {Select,Option,OptionContainer} from "./styledComponents"

class DropDownList extends Component {
    static defaultProps = {
        status:true ,
        testid:"",
        value:"",
        optionsList:["food","Water"]
}
    render() {
        const {optionsList,onChangeHandler,value,status,testid}=this.props
        return (
            <Select status={status} data-testid={testid} onChange={onChangeHandler} value={value}>
                <Option>All</Option>
                {optionsList.map(eachOption=>
                <Option key={eachOption} value={eachOption}>{eachOption}</Option>)}
            </Select>
                );
    }
}

export { DropDownList};