import React, { Component } from 'react';
import {Title,ReportedDate,AssignedContainer,Container,RPDetails,Name,Mode,PhoneNumber,

    Severty,Status,DueDate,Message} from "./styledComponents"
import {Image} from "../Image/"
import {AiFillMessage} from "react-icons/ai";

class TableData extends Component {
    render() {
        const {title,imageURL,reportedDate,rpName,rpPhoneNumber,severtyMode,status,dueDate,}=this.props
        return (
           <Container>
           <Title>
               {title}
           </Title>
        <ReportedDate>{reportedDate}</ReportedDate>
            <AssignedContainer>
                <Image imageURL="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/867a98d4-d61b-45cf-89cc-0a50a9dddb38@3x.png" />
                <RPDetails>
        <Name>{rpName}</Name>
        <PhoneNumber>{rpPhoneNumber}</PhoneNumber>
                </RPDetails>
            </AssignedContainer>
        <Severty><Mode>{severtyMode}</Mode></Severty>
        <Status>{status}</Status>
        <ReportedDate>{dueDate}</ReportedDate>
        <Message><AiFillMessage/></Message>
        </Container>
        );
    }
}

export { TableData};