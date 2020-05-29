import React, { Component } from 'react';
import { PaginationContainer,Separator,PaginationArrows,PageNumbers,ArrowSymbol,PrevPageNumber} from "./styledComponents";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import PaginationButton from "../CommonPaginationButton/PaginationButton"
class Pagination extends Component {
    render() {
        const {currentPage,totalPages,list,navigateNextPage,navigatePrevPage}=this.props
        
        return (
            <PaginationContainer>
                <ArrowSymbol><FaAngleLeft/></ArrowSymbol>
                {list.map((item,index)=>
                        <PageNumbers key={item.id}>{index+1}</PageNumbers>)}
                                       {/* <Separator>/</Separator> */}
                    <ArrowSymbol><FaAngleRight/></ArrowSymbol>
            </PaginationContainer>
        );
    }
}

export default Pagination;