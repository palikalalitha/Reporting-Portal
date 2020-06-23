import React from 'react'
import { withRouter ,RouteComponentProps} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { getLoadingStatus } from '@ib/api-utils'
import { History } from 'history';
import { userStore } from '../../stores/index'
import { ObservationList } from '../../components/ObservationList/ObservationList'
import { UserPage } from '../../components/UserPage/UserPage'
import {
   gotoObservationCreationForm,
   gotoObservationDetails,
   gotoSignInPage,
   gotoPreviousPage
} from '../../utils/NavigationUtils'
import { SignInStore } from "../../../SignInModule/stores/SignInStore"


export interface UserPageProps 
{
   history:History
   signInStore:SignInStore
}

@inject('signInStore')
@observer
class UserRoute extends React.Component<UserPageProps> {
   @observable roleType:string|any=""
   @observable filterList:Array<Object>=[]
   @observable sort_type:string=""
   constructor(props: Readonly<UserPageProps>) {
      super(props)
      this.filterList = []
      this.sort_type = 'ASC'
   }
   componentDidMount() {
      this.doNetworkCalls()
      this.roleType = this.props.history.location.state
   }
   doNetworkCalls = () => {
      userStore.getObservationList()
      userStore.onClickTogetCategories()
   }
   naviagteToUserForm = () :void=> {
      const { history } = this.props
      gotoObservationCreationForm(history)
      //this.props.history.push(USER_CREATION_FORM)
   }
   gotoObservationList = () :void=> {
      const { history } = this.props
      gotoPreviousPage(history)
      // this.props.history.goBack()
   }
   navigateToObservationScreen = (id: number):void => {
      let { history } = this.props
      userStore.getObservationDetailsById(id)
      gotoObservationDetails(history, id, this.roleType)
   }

   observationsSort = (date_type: string):void=> {
      if (this.sort_type === 'ASC') {
         this.sort_type    = 'DESC'
         userStore.setDate_typeAndSortType(date_type, this.sort_type)
      } else {
         this.sort_type = 'ASC'
         userStore.setDate_typeAndSortType(date_type, this.sort_type)
      }
   }
   filterByStatus = (option: { value: any }[] | null):void=> {
      if (option === null) {
         userStore.filterByStatus([])
      } else {
         this.filterList = option.map((eachOption: { value: any }) => eachOption.value)
         userStore.filterByStatus(this.filterList)
      }
   }
   onClickToSignOut = () :void=> {
      const { access_token } = this.props.signInStore
      this.props.signInStore.userSignOut(
         access_token    )
      this.onSuccess()
   }
   onSuccess = () => {
      let { history } = this.props
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
         handlePage,
         observationList,
         date_type,
         sort_type,
         getObservationDetailsById,
         singleObservationDetails,
         paginationStore
      } = userStore
      const {  selectedPage, totalPages } = paginationStore
      return (
         <ObservationList
         gotoUserForm={naviagteToUserForm}
         filterByStatus={filterByStatus}
         observationsSort={observationsSort}
         handlePage={handlePage}
         gotoObservationList={gotoObservationList}
         navigateToObservationScreen={navigateToObservationScreen}
         getObservationDetailsById={getObservationDetailsById}
         observationList={observationList}
         singleObservationDetails={singleObservationDetails}
         selectedPage={selectedPage}
         roleType={this.roleType}
         date_type={date_type}
         sort_type={sort_type}
         totlaPages={totalPages}
         />
      )
   })

   render() {
      const {
         getCategoriesAPIStatus,
         paginationStore,
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
            gotoUserForm={this.naviagteToUserForm}
            onClickToSignOut={this.onClickToSignOut}
            doNetworkCalls={this.doNetworkCalls}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}
export default withRouter(UserRoute)
