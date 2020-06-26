import React, { Component } from 'react'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { RPPage } from '../../components/RPPage/RPPage'
import { ObservationList } from '../../../UserModule/components/ObservationList/ObservationList'
import { OBSERVATION_SCREEN } from '../../constants/RPRouteConstants/RPRouteConstants'
import { AssignedObservationList } from '../../components/AssignedObservationList/AssignedObservationList'
import { RPStore } from "../../stores/RPStore"
import { UserStore } from "../../../UserModule/stores/userStore"
import { gotoPreviousPage, gotoObservationDetails, gotoObservationCreationForm } from "../../../UserModule/utils/NavigationUtils"
import { observable } from "mobx"

export interface RPRouteProps  extends RouteComponentProps
{
}
export interface InjectedProps extends RPRouteProps
{
   rpStore:RPStore
   
}
@inject('rpStore')
@observer
class RPRoute extends Component<RPRouteProps> {
   @observable roleType:string|any
   @observable filterList!:Array<Object>
   @observable sort_type!:string
   
   componentDidMount() {
      this.getAssignedObservations()
      this.roleType = this.props.history.location.state
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   getRPStore=()=>
   {
      return this.getInjectedProps().rpStore
   }
   getAssignedObservations = () => {
      this.getRPStore().getAssignedObservationList()
   }
   gotoObservationList = ()=> {
      const { history } = this.props
      gotoPreviousPage(history)
     // this.props.history.goBack()
   }
   navigateToObservationScreen = (id: number):void => {
      let { history } = this.props
      this.getRPStore().getRPObservationDetailsById(id)
      gotoObservationDetails(history, id, this.roleType)
   }
   naviagteToUserForm = () :void=> {
      const { history } = this.props
      gotoObservationCreationForm(history)
   }
   observationsSort = (date_type: string):void=> {
      if (this.sort_type === 'ASC') {
         this.sort_type    = 'DESC'
         this.getRPStore().setDate_typeAndSortType(date_type, this.sort_type)
      } else {
         this.sort_type = 'ASC'
         this.getRPStore().setDate_typeAndSortType(date_type, this.sort_type)
      }
   }
   filterByStatus = (option: { value: any }[] | null):void=> {
      if (option === null) {
         this.getRPStore().filterByStatus([])
      } else {
         this.filterList = option.map((eachOption: { value: any }) => eachOption.value)
         this.getRPStore().filterByStatus(this.filterList)
      }
   }
   renderSuccessUI = observer(() => {
      const {
         assignedObservationList,
         date_type,
         sort_type,
         handlePage,
         paginationStore
      } = this.getRPStore()
      const {  selectedPage, totalPages } = paginationStore
      return (
         <AssignedObservationList
            roleType={this.roleType}
            navigateToObservationScreen={this.navigateToObservationScreen}
            gotoObservationList={this.gotoObservationList}
            observationsSort={this.observationsSort}
            gotoUserForm={this.naviagteToUserForm}
            totlaPages={totalPages}
            handlePage={handlePage}
            date_type={date_type}
            sort_type={sort_type}
            selectedPage={selectedPage}
            observationList={assignedObservationList}
         />
      )
   })
   render() {
      const {
         paginationStore,
         
      } =this.getRPStore()
      const { getEntityListAPIError, getEntityListAPIStatus } = paginationStore
      return (
         <RPPage
         roleType={this.roleType}
            apiStatus={getEntityListAPIStatus}
            apiError={getEntityListAPIError}
            doNetworkCalls={this.getAssignedObservations}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}

export { RPRoute }
