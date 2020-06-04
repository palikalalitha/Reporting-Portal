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
         assigned_to,
         status,
         reported_on,
         is_due_date_private,
         message_count
      } = this.props.observation
      const { name, contact_number,role } = assigned_to
      const { bgColorStatus } = this.props
      return (
         <>
            <TData>{title}</TData>
            <TData>{due_date}</TData>
            <AssignedContainer>
               <Image imageURL={RP_PROFILE_URL} />
               <RPDetails>
                  <Name>{name}</Name>
                  <PhoneNumber>{contact_number}</PhoneNumber>
               </RPDetails>
            </AssignedContainer>
            <Severty status={priority}>
               <Mode>{priority}</Mode>
            </Severty>
            <TData>
               <StatusWrapper bgColorStatus={bgColorStatus}>
                  <Status>{status}</Status>
               </StatusWrapper>
            </TData>
            <TData>
               {is_due_date_private === 'public' ? due_date : 'Private'}
            </TData>
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
