import React, { Component } from 'react'
import { InPutTextBox } from './styledComponents'
import { observer } from 'mobx-react'
import { isEnterKeyEvent } from '../../utils/AppUtils'
import { observable, action } from 'mobx'

class InputElement extends Component {
   static defaultProps = {
      status: false,
      testid: ''
   }
   render() {
      const {
         type,
         borderStyles,
         value,
         onChangeHandler,
         roleType,
         status,
         testid
      } = this.props
      return (
         <InPutTextBox
            id={testid}
            type={type}
            roleType={roleType}
            data-testid={testid}
            status={status}
            defaultValue={value}
            onChange={onChangeHandler}
            borderStyles={borderStyles}
         />
      )
   }
}

export { InputElement }
