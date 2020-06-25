import React from 'react'
import { withRouter ,RouteComponentProps} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { getLoadingStatus } from '@ib/api-utils'
import { ObservationList } from '../../components/ObservationList/ObservationList'
import { UserPage } from '../../components/UserPage/UserPage'
import {
   gotoObservationCreationForm,
   gotoObservationDetails,
   gotoSignInPage,
   gotoPreviousPage
} from '../../utils/NavigationUtils'
import { SignInStore } from "../../../SignInModule/stores/SignInStore"
import { UserStore } from "../../stores/userStore"
UserStore

export interface UserRouteProps  extends RouteComponentProps
{
}
export interface InjectedProps extends UserRouteProps
{
   signInStore:SignInStore
   userStore: UserStore
}
@inject('signInStore',"userStore")
@observer
class UserRoute extends React.Component<UserRouteProps> {
   @observable roleType:string|any=""
   @observable filterList:Array<Object>=[]
   @observable sort_type:string=""
   constructor(props) {
      super(props)
      this.filterList = []
      this.sort_type = 'ASC'
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   getSignInStore=()=>
   {
      return this.getInjectedProps().signInStore
   }
   getUserStore=()=>
   {
      return this.getInjectedProps().userStore
   }
   
   componentDidMount() {
      this.doNetworkCalls()
      this.roleType = this.props.history.location.state
   }
   doNetworkCalls = () => {
      this.getUserStore().getObservationList()
      this.getUserStore().onClickTogetCategories()
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
      this.getUserStore().getObservationDetailsById(id)
      gotoObservationDetails(history, id, this.roleType)
   }

   observationsSort = (date_type: string):void=> {
      if (this.sort_type === 'ASC') {
         this.sort_type    = 'DESC'
         this.getUserStore().setDate_typeAndSortType(date_type, this.sort_type)
      } else {
         this.sort_type = 'ASC'
         this.getUserStore().setDate_typeAndSortType(date_type, this.sort_type)
      }
   }
   filterByStatus = (option: { value: any }[] | null):void=> {
      if (option === null) {
         this.getUserStore().filterByStatus([])
      } else {
         this.filterList = option.map((eachOption: { value: any }) => eachOption.value)
         this.getUserStore().filterByStatus(this.filterList)
      }
   }
   onClickToSignOut = () :void=> {
      const { access_token } =  this.getSignInStore()
     this.getSignInStore().userSignOut(
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
         getSingleObservationDetails,
         paginationStore
      } = this.getUserStore()
      const {  selectedPage, totalPages } = paginationStore
      return (
         <ObservationList
         gotoUserForm={naviagteToUserForm}
        
         observationsSort={observationsSort}
         handlePage={handlePage}
         gotoObservationList={gotoObservationList}
         navigateToObservationScreen={navigateToObservationScreen}
         getObservationDetailsById={getObservationDetailsById}
         observationList={observationList}
         singleObservationDetails={getSingleObservationDetails}
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
      } =this.getUserStore()
      const { getEntityListAPIError, getEntityListAPIStatus } = paginationStore
      const apiStatus = getLoadingStatus(
         getEntityListAPIStatus,
         getCategoriesAPIStatus
      )
      return (
         <UserPage
            roleType={this.roleType}
            filterByStatus={this.filterByStatus}
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
