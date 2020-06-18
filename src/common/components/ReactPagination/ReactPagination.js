
import React, { Component } from 'react';
import ReactPaginate from "react-paginate"

class ReactPagination extends Component {
    render() {
        const {totlaPages,handlePage,selectedPage}=this.props
        return (
            <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            breakLinkClassName={'breakLinkClassName'}
            pageCount={totlaPages}
            marginPagesDisplayed={5}
            pageRangeDisplayed={2}
            onPageChange={handlePage}
            containerClassName={'page-container'}
            pageClassName={'page-box'}
            activeClassName={'active-page'}
            previousClassName={'prev'}
            nextClassName={'prev'}
            forcePage={selectedPage}
            />
        );
    }
}

export default ReactPagination;