import React from 'react'
import { render, fireEvent } from '@testing-library/react'


import { TextArea} from "./TextArea"
describe('Text area Tests', () => {
    it('should render the text area ', () => {
        const data="text area element"
        const status="true"
        const testid="textarea"
        const {  getByTestId, debug } = render(
    
        <TextArea data={data} onChangeHandler={()=>{}}
         status={status} testid={testid} />)

         expect(getByTestId(testid)).toBeInTheDocument()

    
    })
    it('should test the text area onChange function', () => {
        const data="text area element"
        const status="true"
        const testid="textarea"
        const {  getByText,getByTestId, debug } = render(
    
        <TextArea data={data} onChangeHandler={()=>{}}
         status={status} testid={testid} />)

         const value="text changed"
         const textAreaElement=getByTestId(testid)
         fireEvent.change(textAreaElement, { target: { defaultValue: value } })
         expect(getByText(value)).toBeInTheDocument()
      
    
    })
})
 
 