import React from "react"
import { withRouter } from "react-router-dom"
import { observer, inject } from "mobx-react"

import { DesktopLayout } from "../../../common/components/DesktopLayout/DesktopLayout"

import {userStore} from "../../stores/index"
import {ObservationList} from "../../components/UserObservationList/ObservationList"
import { UserPage } from "../../components/UserPage/UserPage"
import {USER_CREATION_FORM,USER_PATH,OBSERVATION_SCREEN} from "../../constants/RouteConstants"

@inject('signInStore')
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
        this.props.history.goBack()
    }
    navigateToObservationScreen=(id)=>
    {  
        let {history} =this.props
        history.push(`${OBSERVATION_SCREEN}/${id}`)
    }
    renderSuccessUI=observer(() => {
        const {role}=this.props.signInStore
        const {gotoObservationList,naviagteToUserForm,navigateToObservationScreen}=this
        const {navigatePrevPage,handlePage,selectedPage,navigateNextPage,currentPage,totlaPages,userObservationList,offset}=userStore
         return (
        <DesktopLayout 
            children={ObservationList}
            handlePage={handlePage}
            selectedPage={selectedPage}
            gotoObservationList={gotoObservationList}     
            navigatePrevPage={navigatePrevPage}
            navigateToObservationScreen={navigateToObservationScreen}
            navigateNextPage={navigateNextPage}
            gotoUserForm={naviagteToUserForm} 
            observationList={userObservationList}
            currentPage={currentPage}
            totlaPages={totlaPages}
            role={role}
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
