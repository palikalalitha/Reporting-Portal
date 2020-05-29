import React, { Component } from 'react';
import { observable } from "mobx"
import { withRouter } from "react-router-dom"

import { UserForm } from "../../components/UserForm/UserForm";
import { UserPage } from "../../components/userPage/UserPage";
import { observer } from "mobx-react";

@observer
class UserFormRoute extends Component {
    @observable title
    @observable category
    @observable errorMessage
    constructor()
    {
        super()
        this.init()
    }
    init=()=>
    {
        this.title=""
        this.category=""
        this.errorMessage=""

    }
    onChangeTitle=(event)=>
    {
        this.title=event.target.value
        this.errorMessage=""
    }
    onChangeSelectValue=(event)=>
    {
        this.category=event.target.value
        this.errorMessage=""
        
    }
    addObservation=()=>
    {
        this.handleSubmit()
  }

    naviagteToUserForm=()=>
    {
       
        this.props.history.replace("/reporting-protal/user-form-creation/")
    }
  
    gotoObservationList=()=>
    {
        alert("In route")
        this.props.history.replace("/reporting-portal/user-page/ ")
    }
    render() {
        const {title,errorMessage,onChangeTitle,
            onChangeSelectValue,onClick,addObservation,naviagteToUserForm,gotoObservationList}=this
      
        return (
           <UserPage
           gotoObservationList={gotoObservationList}
           observationTitle={title}
           errorMessage={errorMessage}
           onChangeTitle={onChangeTitle}
           gotoUserForm={naviagteToUserForm}
           onChangeSelectValue={onChangeSelectValue}
           addObservation={addObservation}
           component={UserForm}
           />
        );
    }
}

export  default withRouter(UserFormRoute)
