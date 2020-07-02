import React from 'react'
import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react'

import { TableData } from './TableData'

import observation from '../../../UserModule/fixtures/getObservationById.json'
describe('SignInStore Tests', () => {
   it('should render the table data ', () => {
      const { getByText } = render(<TableData observation={observation} />)
      expect(getByText(observation.title)).toBeInTheDocument()
   })
})
