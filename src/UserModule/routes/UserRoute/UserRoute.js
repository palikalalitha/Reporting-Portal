import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { getLoadingStatus } from '@ib/api-utils'

import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'
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
      const { userSignOut, access_token } = this.props.signInStore
      this.props.signInStore.userSignOut(
         access_token,
         this.onSuccess,
         this.onFailure
      )
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
         handlePage,
         observationList,
         userObservationList,
         date_type,
         sort_type,
         getObservationDetailsById,
         getObservationDetailsAPIStatus,
         getObservationDetailsAPIError,
         singleObservationDetails,
         categories,
         paginationStore
      } = userStore
      const { offset, selectedPage, totalPages } = paginationStore
      return (
         <ObservationList
            categories={categories}
            detailsAPIStatus={getObservationDetailsAPIStatus}
            deatilsAPIError={getObservationDetailsAPIError}
            getObservationDetailsById={getObservationDetailsById}
            singleObservationDetails={singleObservationDetails}
            filterByStatus={filterByStatus}
            observationsSort={observationsSort}
            roleType={this.roleType}
            date_type={date_type}
            sort_type={sort_type}
            gotoObservationList={this.gotoObservationList}
            navigateToObservationScreen={navigateToObservationScreen}
            gotoUserForm={this.naviagteToUserForm}
            observationList={observationList}
            selectedPage={selectedPage}
            handlePage={handlePage}
            totlaPages={totalPages}
            offset={offset}
         />
      )
   })

   render() {
      const {
         observationList,
         getObservationDetailsAPIStatus,
         getObservationDetailsAPIError,
         getCategoriesAPIError,
         getCategoriesAPIStatus,
         paginationStore,
         categories
      } = userStore
      const { getEntityListAPIError, getEntityListAPIStatus } = paginationStore
      const apiStatus = getLoadingStatus(
         getEntityListAPIStatus,
         getCategoriesAPIStatus
      )
      return (
         <UserPage
            roleType={this.roleType}
            apiStatus={apiStatus}
            apiError={getEntityListAPIError}
            detailsAPIStatus={getObservationDetailsAPIStatus}
            deatilsAPIError={getObservationDetailsAPIError}
            categories={categories}
            observationList={observationList}
            gotoUserForm={this.naviagteToUserForm}
            gotoObservationList={this.gotoObservationList}
            onClickToSignOut={this.onClickToSignOut}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}
export default withRouter(UserRoute)
