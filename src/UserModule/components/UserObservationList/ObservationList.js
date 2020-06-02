import React, { Component } from 'react';
import { observer } from "mobx-react";
import ReactPaginate from 'react-paginate';

import  Table  from "../../../common/components/Table/Table";
import { TableData } from "../../../common/components/TableData/TableData";
import strings from "../../i18n/strings.json"
import Pagination from "../../../common/components/Pagination/Pagination"
import NoObservations from "../NoObservations/NoObservations"
import {ObservationContainer} from "../../styleGuide/typos"
import paginationCss from "./pagination.css"

class ObservationList extends Component {
    render() {
        const {headings}=strings
        const {observationList,gotoUserForm,totlaPages,handlePage,role,gotoObservationList,selectedPage}=this.props
       
        return (
            <ObservationContainer>
            {observationList.length>0?
            <> 
                <Table  {...this.props} 
                headings={['TITLE','REPORTED ON','ASSIGNED TO','SEVERITY','STATUS','DUE DATE','MESSAGES']} observationList={observationList}/>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    breakLinkClassName={'breakLinkClassName'}
                    pageCount={totlaPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlePage}
                    containerClassName={'page-container'} 
                    pageClassName={'page-box'}
                    activeClassName={'active-page'}
                    previousClassName={'prev'}
                    nextClassName={'prev'}
                    forcePage={selectedPage}
                />  
                </>:
                   <NoObservations 
                   gotoUserForm={gotoUserForm} 
                   gotoObservationList={gotoObservationList} />}
                     
              
            </ObservationContainer>
        );
    }
}

export {ObservationList};