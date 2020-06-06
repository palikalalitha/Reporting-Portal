import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { observer } from 'mobx-react'
import { observable } from 'mobx'

import { TableData } from '../TableData/TableData'

import {
   DROP_DOWN_URL,
   USER_HEADINGS,
   RP_HEADINGS
} from '../../constants/ReportingPortalconstants'

import {
   TableContainer,
   TableHeadings,
   TableRow,
   DropDownImage,
   SortButton,
   HeadingContainer
} from './styledComponents'

@observer
class Table extends Component {
   @observable sort_type
   onClick = observationId => {
      this.props.navigateToObservationScreen(observationId)
   }
   onClickToSort = type => {
      this.props.observationsSort(type)
   }
   renderRows = () => {
      let headings =
         this.props.roleType === 'user' ? USER_HEADINGS : RP_HEADINGS

      return headings.map(eachHeading => {
         if (eachHeading === 'reported on' || eachHeading === 'due date')
            return (
               <TableHeadings key={eachHeading}>
                  <HeadingContainer>
                     {eachHeading.toUpperCase()}
                     <DropDownImage
                        value={eachHeading}
                        buttonStatus={this.hideSortButton}
                        onClick={this.onClickToSort.bind(this, eachHeading)}
                        imageURL={DROP_DOWN_URL}
                     />
                  </HeadingContainer>
               </TableHeadings>
            )
         else
            return (
               <TableHeadings key={eachHeading}>
                  {eachHeading.toUpperCase()}
               </TableHeadings>
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
                        onClick={this.onClick.bind(this, eachObservation.id)}
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
