import React, { Component } from 'react'

import { InputTypeRadioButton, Label } from './styledComponents'
import { RADIO, PRIVACY } from '../../constants/ReportingPortalconstants'

class RadioButton extends Component {
   static defaultProps = {
      status: false,
      testid: '',
      list: ['public', 'private']
   }
   render() {
      const { list, handleOptionChange } = this.props
      return (
         <>
            {list.map(eachItem => (
               <>
                  <InputTypeRadioButton
                     key={eachItem}
                     type={RADIO}
                     name={PRIVACY}
                     onChange={handleOptionChange}
                     defaultChecked
                     deafultValue={eachItem}
                  />
                  <Label>{eachItem.toUpperCase()}</Label>
               </>
            ))}
         </>
      )
   }
}

export { RadioButton }
