import React from 'react'
import { render, fireEvent } from '@testing-library/react'


import  {Table} from "./Table"
import observationList from "../../../UserModule/fixtures/getObservationList.json"
import {
    USER_HEADINGS,
    OBSERVATIONLIST
 } from '../../../UserModule/constants/userPageConstants'
describe('Table Tests', () => {
    it('should render the table ', () => {
        const observationsSort=jest.fn()
        
        const {  getByText,getByTestId,getAllByTestId, debug } = render(

        <Table  observationList={observationList} tableHeadings={USER_HEADINGS}  observationsSort={observationsSort}/>)
        // const result=getAllByTestId("row")
        // expect(result[0]).toBeInTheDocument()
        // const tableRow=getByTestId("test")
        // expect(tableRow).toBeInTheDocument()

    })
    it('should test the text area onChange function', () => {
       
        // const {  getByText,getByTestId, debug } = render(
    
        // <Table />)

        //  const value="text changed"
        //  const textAreaElement=getByTestId(testid)
        //  fireEvent.change(textAreaElement, { target: { defaultValue: value } })
        //  expect(getByText(value)).toBeInTheDocument()
      
    
    })
})
 
 