import React from "react"
import { withRouter } from "react-router-dom"
import { observer, inject } from "mobx-react"

import { UserPage } from "../../components/UserPage/UserPage"
import { observable } from "mobx"
import {userStore} from "../../stores/userStore/UserStore"
@inject("signInStore")
@observer
class UserRoute extends React.Component {
    @observable title
    @observable category
    @observable errorMessage
    constructort()
    {
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
        this.props.history.replace("/reporting-portal/sign-in")    
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
    render() { 
        return(
          <UserPage onClick={this.onClick} observationTitle={this.title} category={this.category}
          onChangeSelectValue={this.onChangeSelectValue} 
           onChangeTitle={this.onChangeTitle}
            gotoObservationPage={userStore.gotoObservationPage}
             addObservation={this.addObservation}
             errorMessage=
             {this.errorMessage}
             />
        )
    }
}
export default withRouter(UserRoute)
