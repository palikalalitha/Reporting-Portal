import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


import { observer } from 'mobx-react'
import { observable } from 'mobx'

import { TableData } from '../TableData/TableData'

import { DROP_DOWN_URL } from '../../constants/ReportingPortalconstants'

import {
   TableContainer,
   TableHeadings,
   TableRow,
   DropDownImage,SortButton,
   HeadingContainer
} from './styledComponents'

@observer
class Table extends Component {
   static defaultProps={
      headings:[
         'title',
         'reported on',
         'assigned to',
         'severity',
         'status',
         'due date',
         'messages'
      ],
      observationList:[{
         "id": "1",
         "title": "Learning deviations",
         "priority": "HIGH",
         "description": "It is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or other type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection",
         "category": "category 1",
         "sub_category": "sub_category 1",
         "due_date": "11/5/2020",
         "status": "Action in progress",
         "assigned_to": {
           "name": "lalitha",
           "phno": 913456788
         }
      }]
   }
  onClick=(observationId)=> {
      this.props.navigateToObservationScreen(observationId)

   }
   onClickToSort = (type) => {
     
   }
   renderRows = () => {
      const { headings } = this.props
         return headings.map(eachHeading => {   
            if (eachHeading === "reported on"|| eachHeading === 'due date')
            return (<TableHeadings  key={eachHeading}> 
                           <HeadingContainer>
                              {eachHeading.toUpperCase()}
                     {this.hideSortButton==="reported on"
                     &&<DropDownImage  value={eachHeading}
                      buttonStatus={this.hideSortButton}
                     onClick={this.onClickToSort.bind(this,eachHeading)}
                      imageURL={DROP_DOWN_URL}/>}
                     {/* <SortButton value={eachHeading} onClick={this.onClickToSort}>
                       </SortButton> */}

                  </HeadingContainer>
               </TableHeadings>
            )
         else
            return (
               <TableHeadings key={eachHeading}>  {eachHeading.toUpperCase()}</TableHeadings>
            )
      })
   }
   render() {
      const { observationList } = this.props
      return (
         <>
            <TableContainer>
               <thead>
                  <TableRow>{this.renderRows()}</TableRow>
               </thead>
               <tbody>
                  {observationList.map(eachObservation => (
                     <TableRow
                        onClick={this.onClick.bind(this,eachObservation.id)}
                        value={eachObservation.id}
                        key={eachObservation.id}
                     >
                        <TableData observation={eachObservation} />
                     </TableRow>
                  ))}
               </tbody>
            </TableContainer>
         </>
      )
   }
}

export default withRouter(Table)
