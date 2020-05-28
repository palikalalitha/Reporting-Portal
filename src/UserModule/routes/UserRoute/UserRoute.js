import React from "react"
import { withRouter } from "react-router-dom"
import { observer, inject } from "mobx-react"
import { observable } from "mobx"

import { UserForm } from "../../components/UserForm/UserForm"

import {userStore} from "../../stores/userStore/UserStore"
import {ObservationList} from "../../components/UserObservationList/ObservationList"
import { UserPage } from "../../components/userPage/UserPage"

@inject("signInStore")
@observer
class UserRoute extends React.Component {
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
    onClick=()=>
    {
        this.props.signInStore.userSignOut()
        this.props.history.replace("/reporting-portal/sign-in+++")    
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
    handleSubmit=()=>
    {
    if(this.title===""||this.title===undefined)
    {
        this.errorMessage="enter the observation title"
    }
    else if(this.category==="")
    {
        this.errorMessage="select category"
    }
    else{
        userStore.onAddObservationList(this.title,this.category)
    }
    }
    renderSuccessUI = observer(() => {
       return (<ObservationList observationList={userStore.observationList}/>)
                   

    })
    naviagteToUserForm=()=>
    {
       
        this.props.history.replace("/reporting-protal/user-form-creation/")
    }
  
    gotoObservationList=()=>
    {
        alert("In route")
        this.props.history.replace("/reporting-protal/user-page/")
    }


    render() {
        const {title,errorMessage,onChangeTitle,
            onChangeSelectValue,onClick,addObservation,naviagteToUserForm,gotoObservationList}=this
      
        const { getObservationListAPIStatus,getObservationListAPIError} = userStore
        
        return(
            <UserPage
            gotoObservationList={gotoObservationList}
            observationTitle={title}
            errorMessage={errorMessage}
            onChangeTitle={onChangeTitle}
            component={ObservationList}
            gotoUserForm={naviagteToUserForm}
            onChangeSelectValue={onChangeSelectValue}
            addObservation={addObservation}
             observationList={userStore.observationList}
            apiStatus={getObservationListAPIStatus}
            apiError={getObservationListAPIError}
            renderSuccessUI={this.renderSuccessUI}/>)
    }
}
export default withRouter(UserRoute)
