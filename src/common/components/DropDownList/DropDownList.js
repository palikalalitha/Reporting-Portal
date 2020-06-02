import React, { Component } from 'react';
import {Option,OptionContainer} from "./styledComponents"
import Select from 'react-select';
import styles from "./SelectBox.css"
class DropDownList extends Component {
    static defaultProps = {
        status:false ,
        testid:"",
        value:"Select",
    onChangeHandler:()=>{},
        optionsList:[{"value":"food","label":"Food"},
        {"value":"Accomdation","label":"Accomadation"}]
}
    render() {
        const {optionsList,onChangeHandler,value,status,roleType,testid,className}=this.props
        console.log(value   )
        return (
            <Select
            data-testid={testid}
            className ={status?"border-container":"select-container"}
            value={value}  
            placeholder={value}
            classNamePrefix ={'option'} 
            onChange={onChangeHandler}
            options={optionsList}
            isDisabled={roleType}
            isSearchable={true} />
                ); 
    }
}

export { DropDownList};





















  // <Select status={status} roleType={roleType} data-testid={testid} className={className} 
            //  onChange={onChangeHandler} value={value}>
            //     <Option>Select</Option>
            //     {optionsList.map(eachOption=>
            //     <Option key={eachOption} value={eachOption}>{eachOption}</Option>)}
            // </Select>