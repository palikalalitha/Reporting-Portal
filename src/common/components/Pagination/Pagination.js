import React, { Component } from 'react';
import { observer } from "mobx-react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

import {ONE} from "../../constants/reportingPortalconstants"
import { PaginationContainer,PageNumbers,ArrowSymbol} from "./styledComponents";

@observer
class Pagination extends Component {
    render() {
        const {currentPage,totalPages,observationList,navigateNextPage,navigatePrevPage,totlaPages}=this.props
        return (
            <PaginationContainer>
                <ArrowSymbol    
                    isDisabled={currentPage===ONE}
                    onClick={navigatePrevPage}>
                    <FaAngleLeft/>
                </ArrowSymbol>
                {observationList.map((item,index)=>
                    <PageNumbers   status={index+ONE===currentPage} 
                        key={item.id}>{index+ONE} </PageNumbers>)}
                <ArrowSymbol 
                    isDisabled={currentPage===totlaPages}
                    onClick={navigateNextPage}>
                    <FaAngleRight/>
                </ArrowSymbol>
        </PaginationContainer>
        );
    }
}

export default Pagination;