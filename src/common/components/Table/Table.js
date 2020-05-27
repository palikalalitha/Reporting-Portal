import React, { Component } from 'react';
               
import {TableContainer,TableHeadings,TableRow} from "./styledComponents"
class Table extends Component {
    render() {
        const {tableHeadings}
        return (
             <TableContainer>
                 <TableRow>
                 <TableHeadings>Title
                 </TableHeadings>
                 <TableHeadings>ReportedOn
                 </TableHeadings>
                 <TableHeadings>AsssignedTo
                 </TableHeadings>

                 </TableRow>
                
             </TableContainer>
        );
    }
}

export { Table};