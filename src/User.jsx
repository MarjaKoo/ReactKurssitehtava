import './App.css';
import React, {useState} from 'react'
import UserService from './services/User'

// props on nimeltään user
const User = ({user, editUser, setIsPositive, setShowMessage, setMessage, reload, reloadNow}) => {

  //komponentin tilan määritys
const [näytäDetails, setNäytäDetails] = useState(false)

    
const deleteUser = (user) => {
  let vastaus = window.confirm(`Remove user ${user.username}`)

  if (vastaus === true){

  UserService.remove(user.username)
    .then(res => {
      if (res.status === 200) {
        setMessage(`Succesfully removed user ${user.username}`)
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
    {user.Username} </h4>
    
   
    {näytäDetails && <div className="userDetails">

            <h3>User name: {user.username}</h3>

            <button onClick={() => deleteUser(user)}>Delete</button> 
            <button onClick={() => editUser(user)}>Edit</button>
            <table>
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Accesslevel id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.Username}</td>
                        <td>{user.Firstname}</td>
                        <td>{user.Lastname}</td>
                        <td>{user.Email}</td>
                        <td>{user.AccesslevelId}</td>
                    </tr>
                </tbody>
            </table></div>}

    
   </div>
  )
}

export default User;