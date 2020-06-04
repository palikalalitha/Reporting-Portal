import React, { Component } from 'react'
import { NavabarHeading, NavabarContainer } from './styledComponents'
import { Button } from '../Button/'
import {
   ADD_NEW,
   USER_HEADING,
   RP_HEADING
} from '../../constants/ReportingPortalconstants'

class Navbar extends Component {
   render() {
      const { heading, gotoUserForm, roleType } = this.props
      return (
         <NavabarContainer>
            <NavabarHeading>
               {roleType === 'user' ? USER_HEADING : RP_HEADING}
            </NavabarHeading>
            {roleType === 'user' && (
               <Button
                  buttonText={ADD_NEW}
                  isDisabled={roleType}
                  onClickHandler={gotoUserForm}
               />
            )}
         </NavabarContainer>
      )
   }
}

export default Navbar
