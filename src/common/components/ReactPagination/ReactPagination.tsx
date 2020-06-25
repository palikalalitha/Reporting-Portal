import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
interface ReactPaginationPropos
{
   totlaPages:number
   handlePage:(page:{selected:number})=>void
   selectedPage:number
}
class ReactPagination extends Component<ReactPaginationPropos> {
   render() {
      const { totlaPages, handlePage, selectedPage } = this.props
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
      )
   }
}

export default ReactPagination
