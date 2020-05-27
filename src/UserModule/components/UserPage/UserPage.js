import React, { Component } from 'react';
import {Container,Label,Wrapper} from "../../styleGuide/typos"
import { Header } from "../../../common/components/Header/Header";
import i18n from "../../i18n/strings.json"
import { InputElement } from "../../../common/components/InputElement";
import { DropDownList } from "../../../common/components/DropDownList/DropDownList";
import { TextArea } from "../../../common/components/TextArea/TextArea";
import {Button} from "../../../common/components/Button/index"
import {signInStore} from  "../../../SignInModule/stores/"
class UserPage extends Component {
    componentWillMount()
    {
        signInStore.userSignOut()
    }
    render() {
       
        const {title,category,subCategory,severity,description,attachments}=i18n.userFormStrings
        return (
            <>
               <Header/>
               <Container>
                   <Wrapper>
                   <Label>{title}</Label>
                   <InputElement type="text"/>
                   </Wrapper>
                   <Wrapper>
                    <Wrapper>
                    <Label>{category}</Label>
                    <DropDownList optionsList={["food","sleep"]}/>
                    </Wrapper>
                    <Wrapper>
                    <Label>{subCategory}</Label>
                    <DropDownList optionsList={["food","sleep"]}/>
                    </Wrapper>
                  </Wrapper>
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
                  </Wrapper>
                  <Button buttonText="Submit"/>
                 
                </Container>
            </>
          
        );

    }
}

export { UserPage};