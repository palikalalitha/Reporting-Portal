import React from "react"
import { withRouter } from "react-router-dom"
import { observer } from "mobx-react"

import {userStore} from "../../stores/index"
import {ObservationList} from "../../components/UserObservationList/ObservationList"
import { UserPage } from "../../components/userPage/UserPage"
import {USER_CREATION_FORM,USER_PATH} from "../../constants/RouteConstants"

@observer
class UserRoute extends React.Component {
    componentDidMount()
    {
        this.getObservationList()
    }
    getObservationList=()=>
    {
     userStore.getObservationList();
    }
    naviagteToUserForm=()=>
    {
        this.props.history.push(USER_CREATION_FORM)   
    }
    gotoObservationList=()=>
    {
        this.props.history.goBack(USER_PATH)
    }
   
    render() {
        const {onChangeSelectValue,addObservation,naviagteToUserForm,gotoObservationList}=this
      
        const { getObservationListAPIStatus,getObservationListAPIError,observationList} = userStore
        
        return(
            <UserPage
            gotoObservationList={gotoObservationList}
             component={ObservationList}
            gotoUserForm={naviagteToUserForm}
            onChangeSelectValue={onChangeSelectValue}
            addObservation={addObservation}
            observationList={observationList}
            apiStatus={getObservationListAPIStatus}
            apiError={getObservationListAPIError}
            renderSuccessUI={this.renderSuccessUI}/>)
    }
}
export default withRouter(UserRoute)
