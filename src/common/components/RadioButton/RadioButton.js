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
      const { list, handleOptionChange, roleType, value } = this.props
      return (
         <>
            {list.map(eachItem => (
               <React.Fragment key={Math.random()}>
                  <InputTypeRadioButton
                     key={Math.random()}
                     type={RADIO}
                     name={PRIVACY}
                     onChange={handleOptionChange}
                     defaultChecked={value}
                     disabled={roleType === 'user' ? true : false}
                     deafultValue={eachItem}
                  />
                  <Label>{eachItem.toUpperCase()}</Label>
               </React.Fragment>
            ))}
         </>
      )
   }
}

export { RadioButton }
