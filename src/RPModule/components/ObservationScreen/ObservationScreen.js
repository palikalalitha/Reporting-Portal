import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

import { withRouter } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'

import {
   ObservationScreenConatiner,
   Wrapper,
   ObservationTitle,
   ArrorSymbol,
   ResetButton,
   ButtonWrapper,
   RadioButtonWrapper,
   Dropdown,
   Description,
   Label,
   Category,
   SubCategory
} from './styledComponents'
import { FaAngleLeft } from 'react-icons/fa'
import observationFixture from '../../../UserModule/fixtures/userData.json'
import { DropDownList } from '../../../common/components/DropDownList/DropDownList'
import { RadioButton } from '../../../common/components/RadioButton/index'
import { InputElement } from '../../../common/components/InputElement'
import { Button } from '../../../common/components/Button'
import { Date } from '../../../common/components/Date/Date'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'

class ObservationScreen extends Component {
   goBack = () => {
      this.props.history.goBack()
   }
   onClickToreset=()=>
   {
      this.clearUpdateValues()
   }
   render() {
      //  let subCategory = {}
      const {
         title,
         description,
         priority,
         due_date,
         category,
         sub_category,
         status,
         due_date_privacy
      } = this.props
      const {
         observation,
         startDate,
         handleChange,
         onChangeSelectValue,
         value,
         isRoleType
      } = this.props
     
     const role=this.props.history.location.state
      return (
         <DesktopLayout roleType={role}>
            <ObservationScreenConatiner>
               <Wrapper data-testid={'fg'}>
                  <ArrorSymbol onClick={this.goBack}>
                     <FaAngleLeft />
                  </ArrorSymbol>

                  <ObservationTitle>{title}</ObservationTitle>
               </Wrapper>
               <Description roleType={role}>{description}</Description>
               <Wrapper>
                  <Category>
                     <Label>Category</Label>
                     <DropDownList
                        roleType={role}
                        value={category}
                        onChangeHandler={onChangeSelectValue}
                     />
                  </Category>
                  <SubCategory>
                     <Label>sub Category</Label>
                     <DropDownList
                        roleType={role}
                        value={sub_category}
                        onChangeHandler={onChangeSelectValue}
                     />
                  </SubCategory>
               </Wrapper>
               <Wrapper>
                  <Label>Status</Label>
                  <Dropdown
                     roleType={role}
                     value={status}
                     onChangeHandler={onChangeSelectValue}
                  />
               </Wrapper>
               <Wrapper>
                  <Label>Severity</Label>
                  <DropDownList
                     roleType={role}
                     value={priority}
                     onChangeHandler={onChangeSelectValue}
                  />
               </Wrapper>
               <Wrapper>
                  <Label>Attachements</Label>
               </Wrapper>
      
               <Wrapper>
                  <Label>Assigned to</Label>
                  <DropDownList
                     roleType={role}
                     value={value}
                     onChangeHandler={onChangeSelectValue}
                  />
               </Wrapper>
               <Wrapper>
                  <Label>Reported on</Label>
                  <Date
                     roleType={true}
                     startDate={startDate}
                     handleChange={handleChange}
                  />
               </Wrapper>
               <Wrapper>
                  <Label>Due date</Label>
                  <Date
                     roleType={role}
                     startDate={startDate}
                     handleChange={handleChange}
                  />
               </Wrapper>
               <RadioButtonWrapper>
                  <RadioButton   roleType={role}/>
               </RadioButtonWrapper>
               <ButtonWrapper>
                  <ResetButton roleType={role} buttonText='Reset' />
                  <Button roleType={role} buttonText='Update' />
               </ButtonWrapper>
            </ObservationScreenConatiner>
         </DesktopLayout>
      )
   }
}

export default withRouter(ObservationScreen)
