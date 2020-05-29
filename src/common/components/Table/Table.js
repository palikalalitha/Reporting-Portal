import React, { Component } from 'react';
               
import {TableContainer,TableHeadings,TableRow} from "./styledComponents"
import { TableData } from "../TableData/TableData";
import { observer } from "mobx-react";
import {HEADING} from "../../../common/constants/reportingPortalconstants"

import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../Pagination/Pagination";
@observer
class Table extends Component {
    render() {
        const {headings,observationList,gotoUserForm}=this.props
      
        return (
           <> 
            <Navbar  heading={HEADING} {...this.props} gotoUserForm={gotoUserForm}/>
             <TableContainer>
                 <thead>
                 <TableRow bgColorStatus={false}>
                     {headings.map(eachHeading=>
                        <TableHeadings key={eachHeading}>{eachHeading}</TableHeadings>)}
                 </TableRow>
                 </thead>
                 <tbody>
                 {observationList.map((eachObservation,index)=>
                        <TableRow  key={eachObservation.id} bgColorStatus={(index+1)%2!==0?true:false}>
                         <TableData  observation={eachObservation} bgColorStatus={(index+1)%2!==0?true:false}/> 
                    </TableRow>
    
                    )}    
            </tbody>
             </TableContainer>
             <Pagination list={observationList}/>
             </>
        );
    }
}

export { Table};