import React, { Component } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { observer } from 'mobx-react'
import Select from 'react-select'
import { toJS } from 'mobx'
import { InputElement } from '../../../common/components/InputElement'
import { TextArea } from '../../../common/components/TextArea/TextArea'
import { Button } from '../../../common/components/Button/index'
import './SelectBox.css'
import {
   UserFormContainer,
   Label,
   Wrapper,
   BackToObservation,
   ErrorMessage,
   SubmitButtonWrapper,
   WrapperMultipleElements,
   SubCategoryWrapper,
   Mandatory,
   LeftSymbol,
   ReportedPortalContainer
} from '../../styleGuide/typos'

import i18n from '../../i18n/strings.json'

import {
   TEXT,
   SUBMIT,
   STATUS,
   CATEGORY_LIST,
   SUB_CATEGORY_LIST,
   SEVERITY,
   TYPE_FILE,
   TITLE_TEST_ID,
   DESC_TEST_ID,
   SEVERITY_TEST_ID
} from '../../constants/userPageConstants'
interface UserFormProps
{
   observationTitle:string
   observationDescription:string
   observationSeverity:string
   errorMessageForTitle:string
   errorMessageForSeverity:string
   errorMessageForDescription:string
   onChangeTitle: (event: { target: { value: string } })=>void
   onChangeSelectValue:(option: any)=>void
   onChangeToSelectCategory:(option: any)=>void
   onChangeToSelectSubCategory:(option: any)=>void
   onChangeDescription:(event: { target: { value: string } })=>void
   addObservation:()=>void
   gotoObservationList:()=>void    
         
}
@observer
class UserForm extends Component<UserFormProps> {
   render() {
      const {
         title,
         category,
         subCategory,
         severity,
         description,
         attachments,
         observation
      } = i18n.userFormStrings
      const {
         observationTitle,
         observationDescription,
         errorMessageForTitle,
         errorMessageForSeverity,
         errorMessageForDescription,
         gotoObservationList,
         onChangeTitle,
         onChangeSelectValue,
         onChangeToSelectCategory,
         onChangeToSelectSubCategory,
         onChangeDescription,
         addObservation,
      
      } = this.props
      return (
         <ReportedPortalContainer>
            <UserFormContainer>
               <Wrapper data-testid={'back'} onClick={gotoObservationList}>
                  <LeftSymbol>
                     <FaAngleLeft />
                  </LeftSymbol>
                  <BackToObservation>{observation}</BackToObservation>
               </Wrapper>
               <Wrapper>
                  <Label>
                     {title}
                     <Mandatory>*</Mandatory>
                  </Label>
                  <div>
                     <InputElement
                        status={errorMessageForTitle}
                        type={TEXT}
                        testid={TITLE_TEST_ID}
                        value={observationTitle}
                        onChangeHandler={onChangeTitle}
                     />
                     <ErrorMessage>{errorMessageForTitle}</ErrorMessage>
                  </div>
               </Wrapper>
               <WrapperMultipleElements>
                  <Wrapper>
                     <Label>{category}</Label>
                     <Select
                        data-testid={'select'}
                        className={'select-container'}
                        classNamePrefix={'option'}
                        onChange={onChangeToSelectCategory}
                        options={CATEGORY_LIST}
                     />
                  </Wrapper>
                  <SubCategoryWrapper>
                     <Label>{subCategory}</Label>
                     <Select
                        data-testid={'select'}
                        className={'select-container'}
                        classNamePrefix={'option'}
                        onChange={onChangeToSelectSubCategory}
                        options={SUB_CATEGORY_LIST}
                     />
                  </SubCategoryWrapper>
               </WrapperMultipleElements>
               <Wrapper>
                  <Label>
                     {severity}
                     <Mandatory>*</Mandatory>
                  </Label>
                  <div>
                     <Select
                        data-testid={'severity'}
                        className={
                           errorMessageForSeverity
                              ? 'border-container'
                              : 'select-container'
                        }
                        classNamePrefix={'option'}
                        onChange={onChangeSelectValue}
                        options={SEVERITY}
                     />
                     <ErrorMessage>{errorMessageForSeverity}</ErrorMessage>
                  </div>
               </Wrapper>

               <Wrapper>
                  <Label>
                     {description}
                     <Mandatory>*</Mandatory>
                  </Label>
                  <div>
                     <TextArea
                        testid={DESC_TEST_ID}
                        status={errorMessageForDescription}
                        data={observationDescription}
                        onChangeHandler={onChangeDescription}
                     />
                     <ErrorMessage>{errorMessageForDescription}</ErrorMessage>
                  </div>
               </Wrapper>
               <Wrapper>
                  <Label>{attachments}</Label>
                  <div>
                     <form>
                        <p>Select files to Upload</p>
                        <input type={TYPE_FILE} multiple accept='image/*' />
                        <label>Select some files</label>
                     </form>
                  </div>
               </Wrapper>
               <SubmitButtonWrapper>
                  <Button buttonText={SUBMIT} onClickHandler={addObservation} />
               </SubmitButtonWrapper>
            </UserFormContainer>
         </ReportedPortalContainer>
      )
   }
}

export { UserForm }