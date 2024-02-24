import './App.css';
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer';
import Customer from './Customer';
import CustomerAdd from './CustomerAdd';


const CustomerList = ({setIsPositive, setShowMessage, setMessage}) => {

  //komponentin tilan määritys
const [customers, setCustomers] = useState([])
const [näytäCustomers, setNäytäCustomers] = useState(false)
const [lisäystila, setLisäysTila] = useState(false)


useEffect( () => {
 CustomerService.getAll()
 .then(data => {
    setCustomers(data)
 })
},[lisäystila]
)   
  return (
    <>
    
    <h1><nobr style={{ cursor: 'pointer' }}
            onClick={() => setNäytäCustomers(!näytäCustomers)}>Customers</nobr>
           
            
            {!lisäystila && <button className='nappi' onClick={() => setLisäysTila(true)}>Add new</button>}</h1>

            {lisäystila && <CustomerAdd setLisäystila={setLisäysTila}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            />}
            
            {
            näytäCustomers && customers && customers.map( c => (
            <Customer key={c.customerId} customer={c}
            setIsPositive={setIsPositive} setShowMessage={setShowMessage} setMessage={setMessage}
            />
            
           )
          )
           }   
   </>
  )
          }
          

export default CustomerList
