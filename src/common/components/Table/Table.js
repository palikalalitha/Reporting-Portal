import React, { Component } from 'react';
               
import {TableContainer,TableHeadings,TableRow} from "./styledComponents"
import { TableData } from "../TableData/TableData";
class Table extends Component {
    render() {
        const {tableData}=this.props
        // const {tableHeadings}
        return (
             <TableContainer>
                 <TableRow>
                 <TableHeadings>Title</TableHeadings>
                 <TableHeadings>ReportedOn</TableHeadings>
                 <TableHeadings>AsssignedTo </TableHeadings>
                 <TableHeadings>severty</TableHeadings>
                 <TableHeadings>status</TableHeadings>
                 <TableHeadings>DueDate</TableHeadings>
                 <TableHeadings>Messages</TableHeadings>
                 </TableRow>
                 
                 <TableData title="Power" rpName="Lalitha" rpPhoneNumber="911103"/>
            
                
             </TableContainer>
        );
    }
}

export { Table};