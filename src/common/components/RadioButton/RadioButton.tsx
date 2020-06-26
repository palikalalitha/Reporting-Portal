import React, { Component } from 'react'

import { InputTypeRadioButton, Label } from './styledComponents'
import { RADIO, PRIVACY } from '../../constants/reportingPortalconstants'
interface RadioButtonProps
{
   list?:any
   handleOptionChange?:()=>void
   roleType?:string|any
   value:string
}
class RadioButton extends Component <RadioButtonProps>{
   render() {
      const { list, handleOptionChange, roleType, value } = this.props
      return (
         <>
            {list.map(eachItem=> (
               <React.Fragment key={Math.random()}>
                  <InputTypeRadioButton
                     key={Math.random()}
                     type={RADIO}
                     name={PRIVACY}
                     onChange={handleOptionChange}
                     checked={value === 'privacy' ? true : false}
                     disabled={roleType === 'user' ? true : false}
                     defaultValue={eachItem}
                  />
                  <Label>{eachItem}</Label>
               </React.Fragment>
            ))}
         </>
      )
   }
}

export { RadioButton }
