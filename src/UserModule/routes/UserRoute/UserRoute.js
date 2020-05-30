import React from "react"
import { withRouter } from "react-router-dom"
import { observer } from "mobx-react"

import { DesktopLayout } from "../../../common/components/DesktopLayout/DesktopLayout"

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
    navigateToObservationScreen=()=>
    {
        
    }
    renderSuccessUI=observer(() => {
        const {gotoObservationList,naviagteToUserForm,navigateToObservationScreen}=this
        const {navigatePrevPage,navigateNextPage,currentPage,totlaPages,userObservationList,offset}=userStore
        return (
        <DesktopLayout 
            children={ObservationList}
            gotoObservationList={gotoObservationList}     
            navigatePrevPage={navigatePrevPage}
            navigateToObservationScreen={navigateToObservationScreen}
            navigateNextPage={navigateNextPage}
            gotoUserForm={naviagteToUserForm} 
            observationList={userObservationList}
            currentPage={currentPage}
            totlaPages={totlaPages}
            offset={offset}/>)
                   
        })
   
    render() {
        const { getObservationListAPIStatus,getObservationListAPIError,userObservationList} = userStore
        return(
            <UserPage
            gotoUserForm={this.naviagteToUserForm}
            observationList={userObservationList}
            gotoObservationList={this.gotoObservationList}
            apiStatus={getObservationListAPIStatus}
            apiError={getObservationListAPIError}
            doNetworkCalls={this.getObservationList}
            renderSuccessUI={this.renderSuccessUI}/>)
    }
}
export default withRouter(UserRoute)
