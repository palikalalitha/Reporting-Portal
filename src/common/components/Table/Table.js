import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

import { TableData } from "../TableData/TableData";

import {TableContainer,TableHeadings,TableRow,DropDownImage,HeadingContainer} from "./styledComponents"
import {DROP_DOWN_URL} from "../../constants/ReportingPortalconstants"
import { observer } from "mobx-react";
import { observable } from "mobx";
@observer
class Table extends Component {
    @observable showAndHideSortButton=true
    onClick=(observationId)=>
    {
        this.props.navigateToObservationScreen(observationId)
    }
    onClickToSort=()=>
    {
        this.showAndHideSortButton=true
    }
    renderRows=()=>
    {
        const {headings}=this.props
        return headings.map(eachHeading=>{
            if(eachHeading==="REPORTED ON"||eachHeading==="DUE DATE")
        return  <TableHeadings>
                    <HeadingContainer>
                        {eachHeading}
                    <DropDownImage showAndHideSortButton={eachHeading} imageURL={DROP_DOWN_URL}/>
                    </HeadingContainer>
                </TableHeadings>
        else
            return <TableHeadings key={eachHeading}>{eachHeading}</TableHeadings>})

    }
    render() {
        const {observationList}=this.props
        return (
            <>
             <TableContainer>
                 <thead>
                 <TableRow>
                     {this.renderRows()}
                 </TableRow>
                 </thead>
                 <tbody>
                    {observationList.map((eachObservation)=>
                            <TableRow 
                                    onClick={this.onClick.bind(this,eachObservation.id)} 
                                    value={eachObservation.id}
                                    key={eachObservation.id}> 
                                    <TableData  observation={eachObservation} /> 
                            </TableRow>
                        )}    
                </tbody>
             </TableContainer>
           
             </>
        );
    }
}

export default withRouter(Table)