import React, { Component } from 'react';
import { observable } from "mobx"
import { withRouter } from "react-router-dom"
import { observer } from "mobx-react";

import { UserForm } from "../../components/UserForm/UserForm";

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
        this.errorMessageForDescription=""
        this.errorMessageForSeverity=""
     
    }
    
    onChangeDescription=(event)=>
    {
        this.description=event.target.value
        this.errorMessageForDescription=""
    }

    onChangeSelectValue=(option)=>
    {
        this.severity=option
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
        if(this.severity==="")
       { this.errorMessageForSeverity=ERROR_MESSAGE

       }
       if(this.description==="")
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
            this.gotoObservationList()
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
        const {title,severity,description,onChangeTitle,onChangeDescription,
            errorMessageForSeverity,errorMessageForTitle,errorMessageForDescription,
            onChangeSelectValue,addObservation,naviagteToUserForm,gotoObservationList}=this
      console.log("userForm Roue")
      
        return (

           <UserForm
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
           />
        );
    }
}

export  default withRouter(UserFormRoute)
