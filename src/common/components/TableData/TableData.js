import React, { Component } from 'react';
import {ReportedDate,AssignedContainer,UserFormContainer,Container,RPDetails,StatusWrapper,Name,Mode,PhoneNumber,Severty,Status,DueDate,Message,TData} from "./styledComponents"
import {Image} from "../Image/"

import { RiMessage2Line } from "react-icons/ri";
import {RP_PROFILE_URL,MESSAGE_ICON_URL} from "../../constants/reportingPortalconstants"
import { observer } from "mobx-react";

class TableData extends Component {
    render() {
      
       const {title,priority,due_date,assigned_to,status,due_date_privacy,message_count}=this.props.observation
       const {name,phno}=assigned_to
      
       const {bgColorStatus}=this.props
        return (
            <>
                <TData>
                    {title}
                </TData>
                <TData>
                {due_date}
                </TData>
                   <AssignedContainer>
                    <Image imageURL={RP_PROFILE_URL}/>
                    <RPDetails>
        <Name>{name}</Name>
        <PhoneNumber>{phno}</PhoneNumber>
                    </RPDetails>
                    </AssignedContainer>
               <Severty status={priority}><Mode>{priority}</Mode></Severty>
        <TData><StatusWrapper bgColorStatus={bgColorStatus}><Status>{status}</Status></StatusWrapper> </TData>
                <TData>
        {due_date_privacy==="public"?due_date:"Private"}
                </TData>
                <TData><Message><RiMessage2Line/></Message></TData>             
               
            </>
        );
    }
}

export { TableData };