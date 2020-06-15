import React, { Component } from 'react'
import { Image } from '../Image/'
import {
   LOGO,
   RP,
   LOGO_IMAGEURL,
   PROFILE_URL
} from '../../constants/ReportingPortalconstants'

import {
   Heading,
   Container,
   HeaderLeftPart,
   HeaderRightPart,
   ProfileName,
   HeaderMiddlePart,
   ObservationsTab,
   AssignedTab,
   LogOutButton
} from './styledComponents.js'

import {
   Assigned_OBSERVATIONS_PATH,
   OBSERVATION_SCREEN,
   OBSERVATION_LIST
} from '../../../RPModule/constants/RPRouteConstants/RPRouteConstants'
import { withRouter } from 'react-router-dom'
import { Button } from '../Button'
class Header extends Component {
   role = this.props.roleType
   renderAssignedObservations = () => {
      this.props.history.push(Assigned_OBSERVATIONS_PATH, this.role)
   }
   onClick = () => {
      alert('signout')
   }
   renderObservations = () => {
      this.props.history.push(OBSERVATION_LIST, 'user')
   }
   render() {
      const { roleType, onClickToSignOut } = this.props
      return (
         <Container>
            <HeaderLeftPart>
               <Image type={LOGO} imageURL={LOGO_IMAGEURL} />
               <Heading>Reporting Portal</Heading>
            </HeaderLeftPart>
            {roleType === RP && (
               <HeaderMiddlePart>
                  <AssignedTab onClick={this.renderAssignedObservations}>
                     Assigned to me
                  </AssignedTab>
                  <ObservationsTab onClick={this.renderObservations}>
                     My Observations
                  </ObservationsTab>
               </HeaderMiddlePart>
            )}
            {/* <HeaderMiddlePart> */}

            {/* </HeaderMiddlePart> */}
            <HeaderRightPart>
               <LogOutButton onClick={onClickToSignOut}>Logout</LogOutButton>

               <ProfileName>Lalitha</ProfileName>
               <Image imageURL={PROFILE_URL} />
            </HeaderRightPart>
         </Container>
      )
   }
}

export default withRouter(Header)
