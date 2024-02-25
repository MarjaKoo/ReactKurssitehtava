// import './App.css';
// import React, {useState} from 'react'
// import CustomerService from './services/Customer'

// // props on nimeltään customer
// const Customer = ({customer, setIsPositive, setShowMessage, setMessage}) => {

//   //komponentin tilan määritys
// const [näytäDetails, setNäytäDetails] = useState(false)

// const deleteCustomer = (customer) => {
//   let vastaus = window.confirm(`Remove Customer ${customer.companyName}`)

//   if (vastaus === true){

//   CustomerService.remove(customer.customerId)
//     .then(res => {
//       if (res.status === 200) {
//         setMessage(`Succesfully removed customer ${customer.companyName}`)
//         setIsPositive(true)
//         setShowMessage(true)

//         //ilmoituksen piilotus
//         setTimeout(() => {
//           setShowMessage(false)
//       }, 5000)
//       }
//     }
//     )
//     .catch(error => {
//       setMessage(error)
//       setIsPositive(false)
//       setShowMessage(true)

//       setTimeout(() => {
//           setShowMessage(false)
//       }, 6000)
//   }
//     )
   
// }
//     //jos poisto halutaankin perua
//     else{
//       setMessage('Poisto peruttu onnistuneesti')
//       setIsPositive(true)
//       setShowMessage(true)

//       //ilmoituksen piilotus
//       setTimeout(() => {
//         setShowMessage(false)
//     }, 5000)}
     


//   return (
//     <div className='customerDiv'>

//     <h4 onClick={() => setNäytäDetails(!näytäDetails)}>
//     {customer.companyName} </h4>
    
//     {/* {/// tämä vaihtoehtona
//     onMouseEnter={() => setNäytäDetails(true)}
//     onMouseLeave={()=> setNäytäDetails(false)}{customer.companyName}    } */}


//     {näytäDetails && <div className="customerDetails">

//             <h3>Company name: {customer.companyName}</h3>

//             <button onClick={() => deleteCustomer(customer)}>Delete</button> 
//             <button>Edit</button>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Contact person</th>
//                         <th>Phone</th>
//                         <th>Address</th>
//                         <th>City</th>
//                         <th>Country</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{customer.contactName}</td>
//                         <td>{customer.phone}</td>
//                         <td>{customer.address}</td>
//                         <td>{customer.city}</td>
//                         <td>{customer.country}</td>
//                     </tr>
//                 </tbody>
//             </table></div>}

    
//    </div>
//   )
// }
// }
// export default Customer;

// import './App.css'
// import React, {useState} from 'react'

// // props on nimeltään customer
// const Customer = ({customer}) => {

// // Komponentin tilan määritys
// const [showDetails, setShowDetails] = useState(false)


//   return (
//     <div className='customerDiv'>
        
//        <h4 onMouseEnter={() => setShowDetails(true)}
//        onMouseLeave={() => setShowDetails(false)}
//        >
//            {customer.companyName}
//         </h4>

//        {showDetails && <div className="customerDetails">
//                 <h3>{customer.companyName}</h3>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Contact person</th>
//                             <th>Phone</th>
//                             <th>Address</th>
//                             <th>City</th>
//                             <th>Country</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{customer.contactName}</td>
//                             <td>{customer.phone}</td>
//                             <td>{customer.address}</td>
//                             <td>{customer.city}</td>
//                             <td>{customer.country}</td>
//                         </tr>
//                     </tbody>
//                 </table></div>}
//     </div>
//   )
// }

// export default Customer




import './App.css';
import React, {useState} from 'react'
import CustomerService from './services/Customer'

// props on nimeltään customer
const Customer = ({customer, setIsPositive, setShowMessage, setMessage}) => {

  //komponentin tilan määritys
const [näytäDetails, setNäytäDetails] = useState(false)

const deleteCustomer = (customer) => {
    let vastaus = window.confirm(`Remove Customer ${customer.companyName}`)

    if ( vastaus === true) {

    CustomerService.remove(customer.customerId)
    .then(res => alert (res.data)) 
    
    }    
    
    

}

// const deleteCustomer = (customer) => {
//   let vastaus = window.confirm(`Remove Customer ${customer.companyName}`)

//   if (vastaus === true){

//   CustomerService.remove(customer.customerId)
//     .then(res => {
//       if (res.status === 200) {
//         setMessage(`Succesfully removed customer ${customer.companyName}`)
//         setIsPositive(true)
//         setShowMessage(true)

//         //ilmoituksen piilotus
//         setTimeout(() => {
//           setShowMessage(false)
//       }, 5000)
//       }
//     }
//     )
//     .catch(error => {
//       setMessage(error)
//       setIsPositive(false)
//       setShowMessage(true)

//       setTimeout(() => {
//           setShowMessage(false)
//       }, 6000)
//   }
//     )
   
// }
//     //jos poisto halutaankin perua
//     else{
//       setMessage('Poisto peruttu onnistuneesti')
//       setIsPositive(true)
//       setShowMessage(true)

//       //ilmoituksen piilotus
//       setTimeout(() => {
//         setShowMessage(false)
//     }, 5000)}
     


  return (
    <div className='customerDiv'>

    <h4 onClick={() => setNäytäDetails(!näytäDetails)}>
    {customer.companyName} </h4>
    
    {/* {/// tämä vaihtoehtona
    onMouseEnter={() => setNäytäDetails(true)}
    onMouseLeave={()=> setNäytäDetails(false)}{customer.companyName}    } */}


    {näytäDetails && <div className="customerDetails">

            <h3>Company name: {customer.companyName}</h3>

            <button onClick={() => deleteCustomer(customer)}>Delete</button> 
            <button>Edit</button>
            <table>
                <thead>
                    <tr>
                        <th>Contact person</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{customer.contactName}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.country}</td>
                    </tr>
                </tbody>
            </table></div>}

    
   </div>
  )
}

export default Customer;