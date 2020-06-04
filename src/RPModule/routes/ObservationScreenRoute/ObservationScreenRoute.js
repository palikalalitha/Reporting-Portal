import React from 'react'
import { withRouter } from 'react-router-dom'

import ObservationScreen from '../../components/ObservationScreen/ObservationScreen'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import observationFixture from '../../../UserModule/fixtures/userData.json'

@observer
class ObservationScreenRoute extends React.Component {
   @observable roleType
   @observable startDate
   constructor() {
      super()
      this.startDate=Date.now()
   }
   handleChange = date => {
      this.startDate = date
   }
   onChangeSelectValue = option => {
      this.value = option
   }
   render() {
      const {
         title,
         startDate,
         description,
         priority,
         due_date,
         status,
         category,
         sub_category,
         due_date_privacy
      } = observationFixture[0]

      return (
         <ObservationScreen
         startDate={startDate}
            title={title}
            description={description}
            priority={priority}
            due_date={due_date}
            status={status}
            due_date_privacy={due_date_privacy}
            onChangeSelectValue={this.onChangeSelectValue}
            handleChange={this.handleChange}
            {...this.props}
         />
      )
   }
}
export default withRouter(ObservationScreenRoute)
