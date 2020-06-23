import React, { Component } from 'react'
import { TextAreaElement } from './styledComponents'
interface TextAreaProps {
   data: string
   onChangeHandler: (event: { target: { value: string } })=>void
   roleType?:string
   status?:string|undefined
   testid:string
}
class TextArea extends Component<TextAreaProps> {
   render() {
      const { data, onChangeHandler, status, testid } = this.props
      return (
         <TextAreaElement
            status={status}
            data-testid={testid}
            defaultValue={data}
            onChange={onChangeHandler}
         ></TextAreaElement>
      )
   }
}

export { TextArea }
