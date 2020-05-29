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
   
    onClick=()=>
    {
        this.props.signInStore.userSignOut()
        this.props.history.replace("/reporting-portal/sign-in+++")    
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
