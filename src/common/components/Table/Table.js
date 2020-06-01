import React, { Component } from 'react';
import { observer } from "mobx-react";

import Pagination from "../Pagination/Pagination";
import ReactPaginate from 'react-paginate';
import { TableData } from "../TableData/TableData";
import paginationcss from "./Table.css"
import {TableContainer,TableHeadings,TableRow,PaginationContainer} from "./styledComponents"



class Table extends Component {
    handlePage=()=>
    {
        this.currentPage=event
    }
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
             {/* <PaginationContainer>
             <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.props.totlaPages}
              marginPagesDisplayed={10}
              pageRangeDisplayed={5}
              onPageChange={this.props.navigateNextPage}
              containerClassName={'pagination-container'}
              subContainerClassName={'pagination'}
              activeClassName={'active'}

             />

             </PaginationContainer> */}
             <Pagination  {...this.props} />
             </>
        );
    }
}

export { Table};