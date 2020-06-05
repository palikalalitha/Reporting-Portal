import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'

import { userStore } from '../../stores/index'
import { ObservationList } from '../../components/ObservationList/ObservationList'
import { UserPage } from '../../components/UserPage/UserPage'
import {
   USER_CREATION_FORM,
   USER_PATH,
   OBSERVATION_SCREEN
} from '../../constants/RouteConstants'
import { signInStore } from '../../../SignInModule/stores'
@inject('signInStore')
@observer
class UserRoute extends React.Component {
   @observable roleType
   @observable filterList
   constructor(props) {
      super(props)
      this.filterList = []
      this.roleType = this.props.history.location.state
   }
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      userStore.getObservationList()
      console.log(userStore.observationList)
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

   observationsSort = (date_type, sort_type) => {
      userStore.setDate_typeAndSortType(date_type, sort_type)
   }
   filterByStatus = option => {
      this.filterList = option.map(eachOption => eachOption.value)
      console.log(this.filterList)
   }
   onClickToSignOut = () => {
      this.props.signInStore.userSignOut()
   }
   renderSuccessUI = observer(() => {
      const {
         gotoObservationList,
         naviagteToUserForm,
         navigateToObservationScreen,
         observationsSort,
         filterByStatus
      } = this

      const {
         navigatePrevPage,
         handlePage,
         selectedPage,
         navigateNextPage,
         currentPage,
         totlaPages,
         observationList,
         userObservationList,
         offset,
         date_type,
         sort_type,
         getObservationDetailsById,
         getObservationDetailsAPIStatus,
         getObservationDetailsAPIError,
         singleObservationDetails
      } = userStore
      console.log(selectedPage, totlaPages, currentPage)
      return (
         <ObservationList
            detailsAPIStatus={getObservationDetailsAPIStatus}
            deatilsAPIError={getObservationDetailsAPIError}
            filterByStatus={filterByStatus}
            getObservationDetailsById={getObservationDetailsById}
            observationsSort={observationsSort}
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
            observationList={observationList}
            singleObservationDetails={singleObservationDetails}
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
         observationList,
         getObservationDetailsAPIStatus,
         getObservationDetailsAPIError
      } = userStore
      console.log(getObservationDetailsAPIStatus, getObservationListAPIError)
      return (
         <UserPage
            roleType={this.roleType}
            gotoUserForm={this.gotoUserForm}
            filterByStatus={this.filterByStatus}
            gotoUserForm={this.naviagteToUserForm}
            observationList={observationList}
            gotoObservationList={this.gotoObservationList}
            apiStatus={getObservationListAPIStatus}
            apiError={getObservationListAPIError}
            detailsAPIStatus={getObservationDetailsAPIStatus}
            deatilsAPIError={getObservationDetailsAPIError}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}
export default withRouter(UserRoute)
