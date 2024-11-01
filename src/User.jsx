import './App.css';
import React, {useState} from 'react'
import UserService from './services/User'
import UserList from './UserList';

// props on nimeltään customer
const User = ({user, editUser, setIsPositive, setShowMessage, setMessage, reload, reloadNow}) => {

  //komponentin tilan määritys
const [näytäDetails, setNäytäDetails] = useState(false)

// const deleteCustomer = (customer) => {
//     let vastaus = window.confirm(`Remove Customer ${customer.companyName}`)

//     if ( vastaus === true) {                
//     CustomerService.remove(customer.customerId)
//     .then(res => alert (res.data)) 
//     }    
    



const deleteUser = (user) => {
  let vastaus = window.confirm(`Remove user ${user.firstName}`)

  if (vastaus === true){

  UserService.remove(user.userId)
    .then(res => {
      if (res.status === 200) {
        setMessage(`Succesfully removed user ${user.firstName}`)
        setIsPositive(true)
        setShowMessage(true)

        window.scrollBy(0, -10000)  //scrollataan ylös jotta nähdään alert

        //ilmoituksen piilotus
        setTimeout(() => {
          setShowMessage(false)
      }, 5000)
      reloadNow(!reload)
      }
    }


    )
    .catch(error => {
      setMessage(error.message)
      setIsPositive(false)
      setShowMessage(true)
      window.scrollBy(0, -10000) 

      setTimeout(() => {
          setShowMessage(false)
      }, 6000)
  }
    )
   
}
    //jos poisto halutaankin perua
    else{
      setMessage('Poisto peruttu onnistuneesti')
      setIsPositive(true)
      setShowMessage(true)

      //ilmoituksen piilotus
      setTimeout(() => {
        setShowMessage(false)
    }, 5000)}
}


  return (
    <div className='userDiv'>

    <h4 onClick={() => setNäytäDetails(!näytäDetails)}>
    {user.firstName} </h4>
    
    {/* {/// tämä vaihtoehtona
    onMouseEnter={() => setNäytäDetails(true)}
    onMouseLeave={()=> setNäytäDetails(false)}{customer.companyName}    } */}

{näytäDetails && <div className="userDetails">

<h3>User name: {user.firstName}</h3>

  <button onClick={() => deleteUser(user)}>Delete</button> 
  <button onClick={() => editUser(user)}>Edit</button>
  <table>
      <thead>
          <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Access Level</th>
          </tr>
      </thead>
      <tbody>
          <tr>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.email}</td>
                              <td>{user.accesslevelId}</td>
          </tr>
      </tbody>
  </table></div>}


</div>
)
}

export default User;