import './App.css';
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer';
import Customer from './Customer';
import CustomerAdd from './CustomerAdd';
import CustomerEdit from './CustomerEdit';


const CustomerList = ({setIsPositive, setShowMessage, setMessage}) => {

  //komponentin tilan määritys
const [customers, setCustomers] = useState([])
const [näytäCustomers, setNäytäCustomers] = useState(false)
const [lisäystila, setLisäysTila] = useState(false)
const [muokkaustila, setMuokkausTila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaCustomer, setMuokattavaCustomer] = useState(false)
const [search, setSearch] = useState("")


useEffect( () => {

  const token = localStorage.getItem('token')
  CustomerService
      .setToken(token)
      
 CustomerService.getAll()
 .then(data => {
    setCustomers(data)
 })
},[lisäystila, reload, muokkaustila]
)   

//hakukentän onChange tapahtumankäsittelijä
const handleSearchInputChange = (event) => {
  setNäytäCustomers(true)
  setSearch(event.target.value.toLowerCase())
}

const editCustomer = (customer) => {
setMuokattavaCustomer(customer)
setMuokkausTila(true)
}

  return (
    <>
    
    <h1><nobr style={{ cursor: 'pointer' }}
            onClick={() => setNäytäCustomers(!näytäCustomers)}>Customers</nobr>

            
            {!lisäystila && <button className='nappi' onClick={() => setLisäysTila(true)}>Add new</button>}</h1>

            <div>
            {!lisäystila && !muokkaustila &&
            <input placeholder='Search by company name' value={search} onChange={handleSearchInputChange} />
            }
           </div>

            {lisäystila && <CustomerAdd setLisäystila={setLisäysTila}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            />}

            {muokkaustila && <CustomerEdit setMuokkaustila={setMuokkausTila}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            muokattavaCustomer={muokattavaCustomer}
            />}
            
            {
            !lisäystila && !muokkaustila && näytäCustomers && customers && customers.map( c => 
              {
                const lowerCaseName = c.companyName.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
              return(
            <Customer key={c.customerId} customer={c} reloadNow={reloadNow} reload={reload}
            setIsPositive={setIsPositive} setShowMessage={setShowMessage} setMessage={setMessage}
            editCustomer={editCustomer}
            />
            
           )
          }
        }
          )
           }   
   </>
  )
          }
          

export default CustomerList
