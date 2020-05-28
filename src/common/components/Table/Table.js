import React, { Component } from 'react';
               
import {TableContainer,TableHeadings,TableRow} from "./styledComponents"
import { TableData } from "../TableData/TableData";
import { observer } from "mobx-react";
import {HEADING} from "../../../common/constants/reportingPortalconstants"

import Navbar from "../../components/Navbar/Navbar";
@observer
class Table extends Component {
    render() {
        const {headings,observationList,gotoUserForm}=this.props
        return (
           <> 
            <Navbar  heading={HEADING} gotoUserForm={gotoUserForm}/>
             <TableContainer>
                 <thead>
                 <TableRow>
                     {headings.map(eachHeading=>
                        <TableHeadings key={eachHeading}>{eachHeading}</TableHeadings>)}
                 </TableRow>
                 </thead>
                 <tbody>
                 {observationList.map(eachObservation=>
                        <TableRow  key={eachObservation}>
                         <TableData  observation={eachObservation}/> 
                    </TableRow>
                    )}
                  
            </tbody>
                    
             </TableContainer>
             </>
        );
    }
}

export { Table};