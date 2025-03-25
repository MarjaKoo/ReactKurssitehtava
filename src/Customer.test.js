import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Customer from './Customer.jsx'

test('Customer-komponentti renderöityy oikein', () => {
  
    const customer = {
        customer: "Wilman Kala"       
      }    
    
      const mockHandler = jest.fn()  

    // render(<Customer customer={customer} />)
    render(<Customer customer={customer} poistaCustomer={mockHandler} />)
  
    const element = screen.getByText('Wilman Kala')
    expect(element).toBeDefined()
  })