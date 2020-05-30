import React, { Component } from 'react';
import { observer } from "mobx-react";

import Pagination from "../Pagination/Pagination";
import { TableData } from "../TableData/TableData";
import {TableContainer,TableHeadings,TableRow} from "./styledComponents"

class Table extends Component {
    render() {
        const {headings,observationList,navigateToObservationScreen}=this.props
        return (
            <>
             <TableContainer>
                 <thead>
                 <TableRow bgColorStatus={false}>
                     {headings.map(eachHeading=>
                        <TableHeadings key={eachHeading}>{eachHeading}</TableHeadings>)}
                 </TableRow>
                 </thead>
                 <tbody>
                 {observationList.map((eachObservation,index)=>
                        <TableRow  onClick={navigateToObservationScreen} key={eachObservation.id} bgColorStatus={(index+1)%2!==0?true:false}>
                         <TableData  observation={eachObservation} bgColorStatus={(index+1)%2!==0?true:false}/> 
                    </TableRow>
    
                    )}    
            </tbody>
             </TableContainer>
             <Pagination  {...this.props} />
             </>
        );
    }
}

export { Table};