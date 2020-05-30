import React, { Component } from 'react';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import { Observer } from "mobx-react";

import { InputElement } from "../../../common/components/InputElement";
import { DropDownList } from "../../../common/components/DropDownList/DropDownList";
import { TextArea } from "../../../common/components/TextArea/TextArea";
import {Button} from "../../../common/components/Button/index"
import {Header} from "../../../common/components/Header/Header"
import {signInStore} from  "../../../SignInModule/stores/"

import {UserFormContainer,Label,Wrapper,BackToObservation,ErrorMessage,SubmitButtonWrapper,
    WrapperMultipleElements,SubCategoryWrapper,Mandatory,LeftSymbol,ReportedPortalContainer} from "../../styleGuide/typos"
import i18n from "../../i18n/strings.json"
import {TEXT,SUBMIT,STATUS,CATEGORY_LIST,SUB_CATEGORY_LIST,SEVERITY,TYPE_FILE} from "../../constants/userPageConstants"

@Observer
class UserForm extends Component {
    render() {
        const {title,category,subCategory,severity,description,attachments,observation}=i18n.userFormStrings
        const {
                observationTitle,
                observationDescription,
                observationSeverity,
                errorMessageForTitle,
                errorMessageForSeverity,
                errorMessageForDescription,
                gotoObservationPage,
                gotoObservationList,
                onChangeTitle,
                onChangeSelectValue,
                onChangeDescription,
                addObservation
            }=this.props
        return (
            <ReportedPortalContainer>
            <Header/>
            <UserFormContainer>
                   <Wrapper onClick={gotoObservationList}>
                        <LeftSymbol>
                           <FaAngleLeft/>
                        </LeftSymbol>
                        <BackToObservation>
                            {observation}
                        </BackToObservation>
                   </Wrapper>
                   <Wrapper>
                        <Label>{title}<Mandatory>*</Mandatory></Label>
                        <div>
                        <InputElement  status={errorMessageForTitle}
                                type={TEXT}
                                value={observationTitle} 
                                onChangeHandler={onChangeTitle}
                        />
                        <ErrorMessage>{errorMessageForTitle}</ErrorMessage>
                        </div>
                   </Wrapper>
                   <WrapperMultipleElements>
                        <Wrapper>
                            <Label>{category}</Label>
                            <DropDownList   status={STATUS}
                                    onChangeHandler={onChangeSelectValue}
                                    optionsList={CATEGORY_LIST}/>
                        </Wrapper>
                        <SubCategoryWrapper>
                            <Label>{subCategory}</Label>
                            <DropDownList status={STATUS}
                                     onChangeHandler={onChangeSelectValue} 
                                     optionsList={SUB_CATEGORY_LIST}/>
                        </SubCategoryWrapper>
                    </WrapperMultipleElements>
                    <Wrapper>
                        
                            <Label>{severity}<Mandatory>*</Mandatory> </Label>
                            <div>
                            <DropDownList    
                            status={errorMessageForSeverity}
                            value={observationSeverity}
                                        onChangeHandler={onChangeSelectValue}
                                        optionsList={SEVERITY}/>
                            <ErrorMessage>{errorMessageForSeverity}</ErrorMessage>
                            </div>
                    </Wrapper>
                 
                    <Wrapper>   
                           <Label>{description}<Mandatory>*</Mandatory></Label>
                           <div>
                       
                            <TextArea   status={errorMessageForDescription} data={observationDescription} onChangeHandler={onChangeDescription}/>
                            <ErrorMessage>{errorMessageForDescription}</ErrorMessage>
                            </div>  
                    </Wrapper>
                    <Wrapper>
                            <Label>{attachments}</Label>
                            <div>
                            <form>
                            <p>Select files to Upload</p>
                            <input type={TYPE_FILE} multiple accept="image/*" />
                            <label >Select some files</label>
                            </form>
                        </div>
                    </Wrapper>
                    <SubmitButtonWrapper>
                            <Button buttonText={SUBMIT} onClickHandler={addObservation}/>
                    </SubmitButtonWrapper>  
              
            </UserFormContainer>
            </ReportedPortalContainer>
);
    }
    
}

export { UserForm};