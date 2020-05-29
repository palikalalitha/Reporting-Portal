import React, { Component } from 'react';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import { Observer } from "mobx-react";

import { InputElement } from "../../../common/components/InputElement";
import { DropDownList } from "../../../common/components/DropDownList/DropDownList";
import { TextArea } from "../../../common/components/TextArea/TextArea";
import {Button} from "../../../common/components/Button/index"
import {signInStore} from  "../../../SignInModule/stores/"

import {Container,Label,Wrapper,BackToObservation,ErrorMessage,SubmitButtonWrapper,
    WrapperMultipleElements,SubCategoryWrapper,Mandatory,LeftSymbol} from "../../styleGuide/typos"
import i18n from "../../i18n/strings.json"
import {TEXT,SUBMIT} from "../../constants/userPageConstants"

@Observer
class UserForm extends Component {
    onClick=()=>
    {
        alert(1)
    }
    render() {
        const {title,category,subCategory,severity,description,attachments,observation}=i18n.userFormStrings
       const {observationTitle,gotoObservationPage,errorMessage,gotoObservationList,onChangeTitle,onChangeSelectValue,onClick,addObservation}=this.props
        return (
            <Container>
                   <Wrapper onClick={gotoObservationList}>
                       <LeftSymbol><FaAngleLeft/>
                    </LeftSymbol>
                   <BackToObservation>{observation}</BackToObservation>
                   </Wrapper>
                   <Wrapper>
                   <Label>{title}<Mandatory>*</Mandatory></Label>
                   <InputElement type={TEXT} value={observationTitle} onChangeHandler={onChangeTitle}/>
                  
                   </Wrapper>
                   <WrapperMultipleElements>
                    <Wrapper>
                        <Label>{category}</Label>
                        <DropDownList  onChangeHandler={onChangeSelectValue} optionsList={["food","sleep"]}/>
                    </Wrapper>
                    <SubCategoryWrapper>
                        <Label>{subCategory}</Label>
                        <DropDownList onChangeHandler={onChangeSelectValue} optionsList={["pizza","shopping"]}/>
                    </SubCategoryWrapper>
                  </WrapperMultipleElements>
                  <Wrapper>
                    <Label>{severity}<Mandatory>*</Mandatory> </Label>
                    <DropDownList optionsList={["food","sleep"]}/>
                    </Wrapper>

                  <Wrapper>
                  <Label>{description}<Mandatory>*</Mandatory></Label>
                 <TextArea data="water issue"/>
                  </Wrapper>

                  <Wrapper>
                  <Label>{attachments}</Label>
                  <div id="drop-area">
                    <form class="my-form">
                        <p>Select files to Upload</p><input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)"/>
                        <label class="button" for="fileElem">Select some files</label>
                    </form>
                    </div>
                    </Wrapper>
    
                  
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                  <SubmitButtonWrapper>
                  <Button buttonText={SUBMIT} onClickHandler={addObservation}/>
                  </SubmitButtonWrapper>
                </Container>
        );

    }
}

export { UserForm};