import React, { Component } from 'react';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

import {Container,Label,Wrapper,BackToObservation,ErrorMessage} from "../../styleGuide/typos"
import { Header } from "../../../common/components/Header/Header";
import i18n from "../../i18n/strings.json"
import { InputElement } from "../../../common/components/InputElement";
import { DropDownList } from "../../../common/components/DropDownList/DropDownList";
import { TextArea } from "../../../common/components/TextArea/TextArea";
import {Button} from "../../../common/components/Button/index"
import {signInStore} from  "../../../SignInModule/stores/"
import { Observer } from "mobx-react";

@Observer
class UserPage extends Component {
    render() {
        const {title,category,subCategory,severity,description,attachments,observation}=i18n.userFormStrings
       const {observationTitle,gotoObservationPage,errorMessage,onChangeTitle,onChangeSelectValue,onClick,addObservation}=this.props
        return (
            <>
            <Header/>
            <Button buttonText="Sign out" onClickHandler={onClick}/>
            <Container>
                   <Wrapper onClick={gotoObservationPage}><FaAngleLeft/><BackToObservation>{observation}</BackToObservation></Wrapper>
                   <Wrapper>
                   <Label>{title}</Label>
                   <InputElement type="text" value={observationTitle} onChangeHandler={onChangeTitle}/>
                  
                   </Wrapper>
                   <>
                    <Wrapper>
                        <Label>{category}</Label>
                        <DropDownList  onChangeHandler={onChangeSelectValue} optionsList={["food","sleep"]}/>
                    </Wrapper>
                    <Wrapper>
                        <Label>{subCategory}</Label>
                        <DropDownList onChangeHandler={onChangeSelectValue} optionsList={["pizza","shopping"]}/>
                    </Wrapper>
                  </>
                  <Wrapper>
                    <Label>{severity}</Label>
                    <DropDownList optionsList={["food","sleep"]}/>
                    </Wrapper>
                  <Wrapper>
                  <Label>{description}</Label>
                 <TextArea data="water issue"/>
                  </Wrapper>
                  <Wrapper>
                    <Label>{attachments}</Label>
                    <div id="drop-area">
                        <form className="my-form">
                            <p>Upload images</p>
                            <input type="file" id="fileElem" multiple accept="image/*" 
                       />
                            {/* <label class="button" for="fileElem">Select some files</label> */}
                        </form>
                    </div>
                  </Wrapper>
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                  <Button buttonText="Submit" onClickHandler={addObservation}/>
                 
                </Container>
            </>
          
        );

    }
}

export { UserPage};