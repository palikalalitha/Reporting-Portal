import React, { Component } from 'react';
import {ReportedDate,AssignedContainer,UserFormContainer,Container,RPDetails,StatusWrapper,Name,Mode,PhoneNumber,Severty,Status,DueDate,Message,TData} from "./styledComponents"
import {Image} from "../Image/"
import {AiFillMessage} from "react-icons/ai";
import {RP_PROFILE_URL} from "../../constants/reportingPortalconstants"
import { observer } from "mobx-react";
import { InputElement } from "../InputElement";

@observer
class TableData extends Component {
    render() {
       const {title,severity}=this.props.observation

        return (
            <>
                <TData>
                    {title}
                </TData>
                <TData>
                11/5/2020 at 12:15 PM
                </TData>
                   <AssignedContainer>
                    <Image imageURL={RP_PROFILE_URL}/>
                    <RPDetails>
                        <Name>LaLitha</Name>
                        <PhoneNumber>Ph:917708378</PhoneNumber>
                    </RPDetails>
                    </AssignedContainer>
                <TData><Severty status={severity}><Mode>{severity}</Mode></Severty></TData>
                <TData><StatusWrapper><Status>CLosed</Status></StatusWrapper> </TData>
                <TData>
                11/5/2020 at 12:15 PM
                </TData>
                <TData><Message><AiFillMessage/></Message></TData>             
            </>
        );
    }
}

export { TableData };