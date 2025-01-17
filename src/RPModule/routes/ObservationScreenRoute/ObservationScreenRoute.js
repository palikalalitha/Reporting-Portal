import React from 'react'
import { withRouter } from 'react-router-dom'

import ObservationScreen from '../../components/ObservationScreen/ObservationScreen'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'
import { userStore } from '../../../UserModule/stores'

@inject('userStore')
@observer
class ObservationScreenRoute extends React.Component {
   @observable roleType
   @observable startDate

   componentDidMount() {
      const { id } = this.props.match.params
      console.log(this.props.match.params.id)
      const {
         match: { params },
         history
      } = this.props
      console.log('<<', params.id)

      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      return userStore.getSingleObservationDetails
   }
   constructor() {
      super()
      this.startDate = Date.now()
   }
   handleChange = date => {
      this.startDate = date
   }
   onChangeSelectValue = option => {
      this.value = option
   }
   renderSuccessUI = observer(() => {
      const { getSingleObservationDetails } = this.props.userStore
      const {
         title,
         description,
         priority,
         status,
         reported_on,
         category_name,
         sub_category_name,
         due_date,
         due_date_privacy,
         assigned_to_name
      } = getSingleObservationDetails
      return (
         <ObservationScreen
            reported_on={reported_on}
            title={title}
            description={description}
            sub_category_name={sub_category_name}
            category_name={category_name}
            priority={priority}
            due_date={due_date}
            assigned_to_name={assigned_to_name}
            status={status}
            due_date_privacy={due_date_privacy}
         />
      )
   })

   render() {
      const { id } = this.props.match.params
      const {
         getObservationDetailsAPIError,
         getObservationDetailsAPIStatus
      } = this.props.userStore
      const { renderSuccessUI, doNetworkCalls } = this
      const role = this.props.history.location.state
      return (
         <DesktopLayout roleType={role}>
            <LoadingWrapperWithFailure
               apiStatus={getObservationDetailsAPIStatus}
               apiError={getObservationDetailsAPIError}
               renderSuccessUI={renderSuccessUI}
               onRetryClick={doNetworkCalls}
            />
         </DesktopLayout>
      )
   }
}
export default withRouter(ObservationScreenRoute)
