import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from "mobx"

import { userStore } from '../../stores/index'
import { ObservationList } from '../../components/ObservationList/ObservationList'
import { UserPage } from '../../components/UserPage/UserPage'
import {
   USER_CREATION_FORM,
   USER_PATH,
   OBSERVATION_SCREEN
} from '../../constants/RouteConstants'

@inject('signInStore')
@observer
class UserRoute extends React.Component {
   @observable roleType
   constructor(props)
   {
      super(props)
      this.roleType = this.props.history.location.state
   }
   componentDidMount() {
      this.getObservationList()
   }
   getObservationList = () => {
      userStore.getObservationList()
   }
   naviagteToUserForm = () => {
      this.props.history.push(USER_CREATION_FORM)
   }
   gotoObservationList = () => {
      this.props.history.goBack()
   }
   navigateToObservationScreen = id => {
      let { history } = this.props
      userStore.getObservationDetailsById(id)
      history.push(`${OBSERVATION_SCREEN}/${id}`, this.roleType)
   }

   renderSuccessUI = observer(() => {
      const {
         gotoObservationList,
         naviagteToUserForm,
         navigateToObservationScreen
      } = this
      const {
         navigatePrevPage,
         handlePage,
         selectedPage,
         navigateNextPage,
         currentPage,
         totlaPages,
         userObservationList,
         offset,
         date_type,
         sort_type,
         sortBytDate,
         getObservationDetailsById,
         getObservationDetailsAPIStatus,
         getObservationDetailsAPIError
      } = userStore
      return (
         <ObservationList
            detailsAPIStatus={getObservationDetailsAPIStatus}
            deatilsAPIError={getObservationDetailsAPIError}
         
            getObservationDetailsById={getObservationDetailsById}
            sortBytDate={sortBytDate}
            roleType={this.roleType}
            handlePage={handlePage}
            date_type={date_type}
            sort_type={sort_type}
            selectedPage={selectedPage}
            gotoObservationList={gotoObservationList}
            navigatePrevPage={navigatePrevPage}
            navigateToObservationScreen={navigateToObservationScreen}
            navigateNextPage={navigateNextPage}
            gotoUserForm={naviagteToUserForm}
            observationList={userObservationList}
            currentPage={currentPage}
            totlaPages={totlaPages}
            offset={offset}
         />
      )
   })

   render() {
      const {
         getObservationListAPIStatus,
         getObservationListAPIError,
         userObservationList,
          getObservationDetailsAPIStatus,
          getObservationDetailsAPIError,
      
      } = userStore
      console.log(getObservationListAPIError,getObservationListAPIStatus)
    return (
         <UserPage
            roleType={this.roleType}
            gotoUserForm={this.gotoUserForm}
            gotoUserForm={this.naviagteToUserForm}
            observationList={userObservationList}
            gotoObservationList={this.gotoObservationList}
            apiStatus={getObservationListAPIStatus}
            apiError={getObservationListAPIError}
            detailsAPIStatus={getObservationDetailsAPIStatus}
            deatilsAPIError={getObservationDetailsAPIError}
            doNetworkCalls={this.getObservationList}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}
export default withRouter(UserRoute)
