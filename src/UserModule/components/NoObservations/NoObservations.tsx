import React, { Component } from 'react'
import { observer } from 'mobx-react'
import i18n from '../../i18n/strings.json'
import {
   NoObservationsText,
   NoObservationContainer
} from '../../styleGuide/typos'

import { Button } from '../../../common/components/Button'
import { ADD_NEW } from '../../../common/constants/reportingPortalconstants'


interface NoObservationsProps{
   gotoUserForm:()=>void
}
@observer
class NoObservations extends Component<NoObservationsProps>{
   render() {
      const { noObservations } = i18n
      const { gotoUserForm } = this.props
      return (
         <NoObservationContainer>
            <NoObservationsText>{noObservations}</NoObservationsText>
            <Button buttonText={ADD_NEW} onClickHandler={gotoUserForm} />
         </NoObservationContainer>
      )
   }
}

export default NoObservations
