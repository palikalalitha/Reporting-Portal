import React, { Component } from 'react';
import {ReportedDate,AssignedContainer,UserFormContainer,Container,RPDetails,StatusWrapper,Name,Mode,PhoneNumber,Severty,Status,DueDate,Message,TData} from "./styledComponents"
import {Image} from "../Image/"

import { RiMessage2Line } from "react-icons/ri";
import {RP_PROFILE_URL,MESSAGE_ICON_URL} from "../../constants/reportingPortalconstants"
import { observer } from "mobx-react";

@observer
class TableData extends Component {
    render() {
       const {title,priority,due_date}=this.props.observation
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
                        <Name>LaLitha</Name>
                        <PhoneNumber>Ph:917708378</PhoneNumber>
                    </RPDetails>
                    </AssignedContainer>
               <Severty status={priority}><Mode>{priority}</Mode></Severty>
                <TData><StatusWrapper bgColorStatus={bgColorStatus}><Status>CLosed</Status></StatusWrapper> </TData>
                <TData>
                11/5/2020 at 12:15 PM
                </TData>
                <TData><Message><RiMessage2Line/></Message></TData>             
               
            </>
        );
    }
}

export { TableData };