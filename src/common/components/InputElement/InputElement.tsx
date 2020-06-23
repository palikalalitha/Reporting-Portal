import React, { Component } from 'react'
import { InPutTextBox } from './styledComponents'
interface InputElementProps {
   type: string
   onChangeHandler: (event: { target: { value: string } })=>void
   value:string
   roleType?:string
   status:string
   testid:string
}
class InputElement extends Component<InputElementProps> {
   render() {
      const {
            type,
         value,
         onChangeHandler,
         testid
      } = this.props
      return (
         <InPutTextBox
            type={type}
            {...this.props}
            // roleType={roleType}
            data-testid={testid}
            // status={status}
            defaultValue={value}
            onChange={onChangeHandler}
         />
      )
   }
}

export { InputElement }
