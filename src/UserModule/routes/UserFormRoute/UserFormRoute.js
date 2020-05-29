import React, { Component } from 'react';
import { observable } from "mobx"
import { withRouter } from "react-router-dom"
import { observer } from "mobx-react";

import { UserForm } from "../../components/UserForm/UserForm";
import { UserPage } from "../../components/userPage/UserPage";

import {ERROR_MESSAGE} from "../../constants/userPageConstants"
import {USER_CREATION_FORM} from "../../constants/RouteConstants"
import {userStore} from "../../stores/index"

@observer
class UserFormRoute extends Component {
    @observable title
    @observable severity
    @observable description
    @observable errorMessageForSeverity
    @observable errorMessageForTitle
    @observable errorMessageForDescription
    constructor()
    {
        super()
        this.init()
    }
    init=()=>
    {
        this.title=""
        this.severity=""
        this.description=""
        this.errorMessageForSeverity=""
        this.errorMessageForTitle=""
        this.errorMessageForDescription=""
    }

    onChangeTitle=(event)=>
    {
        this.title=event.target.value 
        this.errorMessageForTitle=""
    }
    
    onChangeDescription=(event)=>
    {
        this.description=event.target.value
        this.errorMessageForDescription=""
    }

    onChangeSelectValue=(event)=>
    {
        console.log(this.severity)
        this.severity=event.target.value
        this.errorMessageForSeverity=""
        
    }
    addObservation=()=>
    {
        this.handleSubmit()
    }
    handleSubmit=()=>
    {
       if(this.title==="")
       {
        this.errorMessageForTitle=ERROR_MESSAGE
       }
       else if(this.severity==="")
       { this.errorMessageForSeverity=ERROR_MESSAGE

       }
       else if(this.description==="")
       {
        this.errorMessageForDescription=ERROR_MESSAGE
       }
       else if(this.title===""&&this.description===""&&this.severity==="")
        {
            this.errorMessageForTitle=ERROR_MESSAGE
        }
        else if(this.severity===""&&this.description==="")
        {
            this.errorMessageForSeverity=ERROR_MESSAGE
        }
        else if(this.description==="")
        {
            this.errorMessageForDescription=ERROR_MESSAGE
        }
        else
        {
            alert("submitted successfully")
            userStore.onAddObservationList(this.title,this.severity,this.description)
            
        }
    }

    naviagteToUserForm=()=>
    {       
        this.props.history.push(USER_CREATION_FORM)
    }
    gotoObservationList=()=>
    {
        this.props.history.goBack()
    }
    render() {
        const {title,severity,description,errorMessage,onChangeTitle,onChangeDescription,
            errorMessageForSeverity,errorMessageForTitle,errorMessageForDescription,
            onChangeSelectValue,addObservation,naviagteToUserForm,gotoObservationList}=this
      
        return (
           <UserPage
           gotoObservationList={gotoObservationList}
           gotoUserForm={naviagteToUserForm}
           observationTitle={title}
           observationDescription={description}
           observationSeverity={severity}
           errorMessageForSeverity={errorMessageForSeverity}
           errorMessageForDescription={errorMessageForDescription}
           errorMessageForTitle={errorMessageForTitle}
           onChangeTitle={onChangeTitle}
           onChangeDescription={onChangeDescription}
           onChangeSelectValue={onChangeSelectValue}
           addObservation={addObservation}
           component={UserForm}
           />
        );
    }
}

export  default withRouter(UserFormRoute)
