import React, { Component } from 'react';
import {Title,ReportedDate,AssignedTo,Severty,Status,DueDate,Messages} from "./styledComponents"
class TableData extends Component {
    render() {
        return (
            <>
            <Title>power</Title>
            <ReportedDate>date</ReportedDate>
            <AssignedTo>image phone</AssignedTo>
            <TableData>Hight or mdefion</TableData>
            <TableData>status</TableData>
            <DueDate> duedate  
            </DueDate>
            <TableData>message</TableData>
            </>
        );
    }
}

export { TableData};