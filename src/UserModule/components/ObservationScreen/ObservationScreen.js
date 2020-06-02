import React, { Component } from 'react';
import DatePicker from "react-datepicker";

 import {withRouter} from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";
 
import {ObservationScreenConatiner,Wrapper,ObservationTitle,ArrorSymbol,ResetButton,ButtonWrapper,RadioButtonWrapper,Dropdown,Description,Label,Category,SubCategory} from "./styledComponents"
import {FaAngleLeft} from "react-icons/fa"
import observationFixture from "../../fixtures/userData.json"
import { DropDownList } from "../../../common/components/DropDownList/DropDownList";
import {RadioButton} from "../../../common/components/RadioButton/index"
import { InputElement } from "../../../common/components/InputElement";
import {Button} from "../../../common/components/Button/"
import {Date} from "../../../common/components/Date/Date"

class ObservationScreen extends Component {

    goBack=()=>
    {
        this.props.history.goBack();
    }
    render() {
        const {title,description,priority,due_date,category,sub_category,status,due_date_privacy}=this.props
        console.log(this.props.match)
           const {observation,startDate,handleChange,onChangeSelectValue,value,isRoleType}=this.props
        return (
           <ObservationScreenConatiner>
                <Wrapper data-testid={"fg"} >
                    <ArrorSymbol onClick={this.goBack}><FaAngleLeft /></ArrorSymbol>
                          
        <ObservationTitle>{title}</ObservationTitle> 
                </Wrapper>
                <Description roleType={isRoleType}>
                  {description}
                                 </Description>
                <Wrapper>
                    <Category>
                        <Label>Category</Label>
                        <DropDownList roleType={isRoleType} value={category}
                        onChangeHandler={onChangeSelectValue}/></Category>
                    <SubCategory>
                    <Label>Sub Category</Label><DropDownList roleType={isRoleType} value={sub_category}
                     onChangeHandler={onChangeSelectValue}/></SubCategory>
                </Wrapper>
            <Wrapper>
                <Label>Status</Label>
                <Dropdown roleType={isRoleType} value={status}  onChangeHandler={onChangeSelectValue}/>
            </Wrapper>
            <Wrapper>
                <Label>Severity</Label>
                <DropDownList roleType={isRoleType} value={priority} onChangeHandler={onChangeSelectValue}/>
            </Wrapper>
            <Wrapper>
                <Label>Attachements</Label>
            </Wrapper>
            <Wrapper>
                <Label>Assigned to</Label>
                <DropDownList roleType={isRoleType} value={value} onChangeHandler={onChangeSelectValue}/>
            </Wrapper>
            <Wrapper>
                <Label>Reported on</Label> 
                <Date roleType={isRoleType} startDate={startDate} handleChange={handleChange}/>
              
            </Wrapper>
            <Wrapper>
                <Label>Due date</Label>
                <Date roleType={isRoleType} startDate={startDate} handleChange={handleChange}/>
                  
            </Wrapper>
            <RadioButtonWrapper>
                  <RadioButton/>
                    </RadioButtonWrapper> 
                    <ButtonWrapper><ResetButton  roleType={isRoleType} buttonText="Reset"/>
                   <Button  roleType={isRoleType} buttonText="Update"/>
                    </ButtonWrapper> 

           </ObservationScreenConatiner>
        );
    }
}

export default withRouter (ObservationScreen);