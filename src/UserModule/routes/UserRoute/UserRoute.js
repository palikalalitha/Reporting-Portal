import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { getLoadingStatus } from '@ib/api-utils'

import { getUserDisplayableErrorMessage } from "../../../utils/APIUtils"
import { userStore } from '../../stores/index'
import { ObservationList } from '../../components/ObservationList/ObservationList'
import { UserPage } from '../../components/UserPage/UserPage'
import {
   gotoObservationCreationForm,
   gotoObservationDetails,
   gotoSignInPage,
   gotoPreviousPage
} from '../../utils/NavigationUtils'


@inject('signInStore')
@observer
class UserRoute extends React.Component {
   @observable roleType
   @observable filterList
   @observable sort_type
   constructor(props) {
      super(props)
      this.filterList = []
      this.sort_type = 'ASC'
      // this.roleType = this.props.history.location.state
   }
   componentDidMount() {
      this.doNetworkCalls()
      this.roleType = this.props.history.location.state
   }
   doNetworkCalls = () => {
      userStore.getObservationList()
      userStore.onClickTogetCategories()
   }
   naviagteToUserForm = () => {
      const { history } = this.props
      gotoObservationCreationForm(history)
      //this.props.history.push(USER_CREATION_FORM)
   }
   gotoObservationList = () => {
      const { history } = this.props
      gotoPreviousPage(history)
      // this.props.history.goBack()
   }
   navigateToObservationScreen = id => {
      let { history } = this.props
      userStore.getObservationDetailsById(id)
      gotoObservationDetails(history, id, this.roleType)
   }

   observationsSort = date_type => {
      if (this.sort_type === 'ASC') {
         this.sort_type = 'DESC'
         userStore.setDate_typeAndSortType(date_type, this.sort_type)
      } else {
         this.sort_type = 'ASC'
         userStore.setDate_typeAndSortType(date_type, this.sort_type)
      }
   }
   filterByStatus = option => {
      if (option === null) {
         userStore.filterByStatus([])
      } else {
         this.filterList = option.map(eachOption => eachOption.value)
         userStore.filterByStatus(this.filterList)
      }
   }
   onClickToSignOut = () => {
      const {userSignOut,access_token}=this.props.signInStore
      this.props.signInStore.userSignOut(access_token,this.onSuccess,this.onFailure)
   }
   onSuccess = () => {
      let { history } = this.props
      gotoSignInPage(history)
   }

   onFailure = () => {
      const { getUserSignOutAPIError: apiError } = this.props.signInStore
      if (apiError !== undefined || apiError != null) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
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
         singleObservationDetails,
         categories
      } = userStore
      return (
         <ObservationList
            categories={categories}
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
         getObservationDetailsAPIError,
         getCategoriesAPIError,
         getCategoriesAPIStatus,
         categories
      } = userStore
    const apiStatus=getLoadingStatus(getObservationListAPIStatus,getCategoriesAPIStatus)
      return (
         <UserPage
            roleType={this.roleType}
            categories={categories}
            onClickToSignOut={this.onClickToSignOut}
            gotoUserForm={this.gotoUserForm}
            filterByStatus={this.filterByStatus}
            gotoUserForm={this.naviagteToUserForm}
            observationList={observationList}
            gotoObservationList={this.gotoObservationList}
       
            apiStatus={apiStatus}
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
