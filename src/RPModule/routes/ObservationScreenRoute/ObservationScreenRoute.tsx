import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'
import { UserStore } from "../../../UserModule/stores/userStore"


import ObservationScreen from '../../components/ObservationScreen/ObservationScreen'
import { RPStore } from "../../stores/RPStore"
      

interface ObservationScreenRoute extends RouteComponentProps
{

}
interface InjectedProps extends ObservationScreenRoute
{
   rpStore:RPStore
}
@inject('rpStore')
@observer
class ObservationScreenRoute extends React.Component<ObservationScreenRoute> {
   @observable roleType
   @observable startDate
   value: any
   constructor(props) {
      super(props)
      this.startDate = Date.now()
   }
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      return this.getRPStore().getSingleObservationDetails
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   getRPStore=()=>
   {
      return this.getInjectedProps().rpStore
   }
  
   handleChange = date => {
      this.startDate = date
   }
   onChangeSelectValue = option => {
      this.value = option
   }
   renderSuccessUI = observer(() => {
      const { rpAssignedObservationDetails } =this.getRPStore()
      return (
         <ObservationScreen
         singleObservationDetails={rpAssignedObservationDetails}
         />
      )
   })

   render() {
      const {
         getRPObservationDetailsAPIError,
         getRPObservationDetailsAPIStatus
      } =this.getRPStore()
      const { renderSuccessUI, doNetworkCalls } = this
      const role = this.props.history.location.state
      return (
         <DesktopLayout roleType={role}>
            <LoadingWrapperWithFailure
               apiStatus={getRPObservationDetailsAPIError}
               apiError={getRPObservationDetailsAPIStatus}
               renderSuccessUI={renderSuccessUI}
               onRetryClick={doNetworkCalls}
            />
         </DesktopLayout>
      )
   }
}
export default withRouter(ObservationScreenRoute)
