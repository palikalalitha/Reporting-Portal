import React, { Component } from 'react'
import {
   ReportedDate,
   AssignedContainer,
   MessageCount,
   RPDetails,
   StatusWrapper,
   Name,
   Mode,
   PhoneNumber,
   Severty,
   Status,
   DueDate,
   Message,
   NotAssignedText,
   TData
} from './styledComponents'
import { Image } from '../Image/'

import { RiMessage2Line } from 'react-icons/ri'
import {
   RP_PROFILE_URL,
   MESSAGE_ICON_URL
} from '../../constants/ReportingPortalconstants'

class TableData extends Component {
   render() {
      const {
         title,
         priority,
         due_date,
         status,
         reported_on,
         message_count,
         assigned_to
      } = this.props.observation
      const { name, contact_number, role } = assigned_to
      const { bgColorStatus } = this.props
      return (
         <>
            <TData>{title}</TData>
            <TData>{reported_on}</TData>
            {assigned_to === 'not assigned' ? (
               <NotAssignedText>Not assigned</NotAssignedText>
            ) : (
               <AssignedContainer>
                  <Image imageURL={RP_PROFILE_URL} />
                  <RPDetails>
                     <Name>{name}</Name>
                     <PhoneNumber>Phno:9234435656
                        {contact_number}</PhoneNumber>
                  </RPDetails>
               </AssignedContainer>
            )}
            <Severty status={priority}>
               <Mode>{priority}</Mode>
            </Severty>
            <TData>
               <StatusWrapper bgColorStatus={bgColorStatus}>
                  <Status>{status}</Status>
               </StatusWrapper>
            </TData>
            <TData>{due_date === 'null' ? 'Private' : due_date}</TData>
            <TData>
               <Message>
                  <RiMessage2Line />
               </Message>
            </TData>
         </>
      )
   }
}

export { TableData }
