import React from 'react'
import {withRouter} from "react-router-dom"

import ObservationScreen from '../../components/ObservationScreen/ObservationScreen'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import observationFixture from '../../../UserModule/fixtures/userData.json'

@observer
class ObservationScreenRoute extends React.Component {
   
   @observable roleType
   @observable startDate
   @observable value
   constructor() {
      super()
      this.categoryValue = ''
      this.startDate = new Date()
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
            value={this.value}
            category={category}
            sub_category={sub_category}
            title={title}
            description={description}
            priority={priority}
            due_date={due_date}
            status={status}
            due_date_privacy={due_date_privacy}
   
            onChangeSelectValue={this.onChangeSelectValue}
            handleChange={this.handleChange}
            startDate={this.startDate}
            {...this.props}
         />
      )
   }
}
export default withRouter(ObservationScreenRoute)
