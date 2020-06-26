import React, { Component } from 'react'
import {
   NavabarHeading,
   NavabarContainer,
   Wrapper,
   FilterHeading
} from './styledComponents'
import { Button } from '../Button'
import Select from 'react-select'
import {
   ADD_NEW,
   USER_HEADING,
   RP_HEADING,
   STATUSLIST
} from '../../constants/reportingPortalconstants'
import './SelectBoxStyles.css'

interface NavbarPropos
{
   gotoUserForm?:()=>void
   roleType:string
   filterByStatus?: (option: { value: any }[] | null)=>void

}
class Navbar extends Component<NavbarPropos> {
   render() {
      const {
         gotoUserForm,
         roleType,
         filterByStatus,
      } = this.props
      return (
         <>
            <NavabarContainer>
               <NavabarHeading>
                  {roleType === 'user'
                     ? USER_HEADING
                     : roleType === 'rp'
                     ? RP_HEADING
                     : ''}
               </NavabarHeading>
               {roleType === 'user' && (
                  <Button
                     buttonText={ADD_NEW}
                     // isDisabled={roleType}
                     onClickHandler={gotoUserForm}
                  />
               )}
            </NavabarContainer>
            <Wrapper>
               <Select
                  data-testid={'filterList'}
                  className={'select-container'}
                  classNamePrefix={'option'}
                  onChange={filterByStatus}
                  options={STATUSLIST}
                  isMulti
               />
            </Wrapper>
         </>
      )
   }
}

export default Navbar
