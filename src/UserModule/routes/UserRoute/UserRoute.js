import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import {getLoadingStatus} from "@ib/api-utils"
import { userStore } from '../../stores/index'
import { ObservationList } from '../../components/ObservationList/ObservationList'
import { UserPage } from '../../components/UserPage/UserPage'
import {
   OBSERVATION_SCREEN
} from '../../constants/RouteConstants'
import {SIGN_IN_PATH} from "../../../SignInModule/constants/RouteConstants"
import { gotoObservationCreationForm,gotoObservationDetails,gotoSignInPage ,gotoPreviousPage} from "../../utils/NavigationUtils"


@inject('signInStore')
@observer
class UserRoute extends React.Component {
   @observable roleType
   @observable filterList
   @observable sort_type
   constructor(props) {
      super(props)
      this.filterList = []
      this.sort_type="ASC"
     // console.log(this.props.signInStore.role)
     console.log(this.props.history.location)
      this.roleType = this.props.history.location.state
   }
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      userStore.getObservationList()
     userStore.onClickTogetCategories()
   }
   naviagteToUserForm = () => {
      const {history}=this.props
      gotoObservationCreationForm(history)
      //this.props.history.push(USER_CREATION_FORM)
   }
   gotoObservationList = () => {
      const {history}= this.props
      gotoPreviousPage(history)
      // this.props.history.goBack()
   }
   navigateToObservationScreen = id => {
      let { history } = this.props
      userStore.getObservationDetailsById(id)
      gotoObservationDetails(history,id,this.roleType)     
   }

   observationsSort = (date_type) => {
      if(this.sort_type==="ASC")
      {
         this.sort_type="DESC"
      userStore.setDate_typeAndSortType(date_type, this.sort_type)
      }
      else
     {
         this.sort_type="ASC"
      userStore.setDate_typeAndSortType(date_type, this.sort_type)
      }
   
   }
   filterByStatus = option => {
      if(option===null)
      {      
         userStore.filterByStatus([])
      }
      else
      {
          this.filterList = option.map(eachOption => eachOption.value)
         userStore.filterByStatus(this.filterList)
      }
      
   }
   onClickToSignOut = () => {
      let { history } = this.props
      this.props.signInStore.userSignOut()
      gotoSignInPage(history)
     
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
   // const apiStatus=getLoadingStatus(getObservationListAPIStatus,getCategoriesAPIStatus) 
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
