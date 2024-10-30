// import './App.css';
// import React, {useState} from 'react'
// import UserService from './services/User';
// import User from './User.jsx'



// const UserEdit = ({setMuokkaustila, setIsPositive, setShowMessage, setMessage, muokattavaUser }) => {

//   //komponentin tilan määritys

// const [newUserId, setNewUserId] = useState(muokattavaUser.UserId)
// const [newUserName, setNewUserName] = useState(muokattavaUser.UserName)
// const [newFirstName, setNewFirstName] = useState(muokattavaUser.firstname)
// const [newLastName, setNewLastName] = useState(muokattavaUser.lastname)
// const [newEmail, setNewEmail] = useState(muokattavaUser.email)
// const [newAccesslevelId, setNewAccesslevelId] = useState(muokattavaUser.accesslevelid)

// const handleSubmit = (event) => {
//         event.preventDefault()
//         var newUser = {
//         UserId: newUserId,
//         UserName: newUserName,
//         firstname: newFirstName,
//         lastname: newLastName,
//         email: newEmail,
//         accesslevelid: newAccesslevelId
//     }



//         UserService.update(newUser)
//         .then(response => {
//             if (response.status === 200) {
//                 setMessage("Edited user: " + newUser.UserName)
//                 setIsPositive(true)
//                 setShowMessage(true)

//                 setTimeout(() => {
//                     setShowMessage(false)
//                 }, 5000)

//                 setMuokkaustila(false)
//             }

//             })
//             .catch(error => {
//                 setMessage("Error")
//                 setIsPositive(false)
//                 setShowMessage(true)
//                 setTimeout(() => {
//                     setShowMessage(false)
//                 }, 6000)

//                 setMuokkaustila(false)
//             })         
            
//             }
 
//   return (
//     <div id="edit">
//     <h2>User Edit</h2>

//     <form onSubmit={handleSubmit}>
//         <div>
//         <input type='text' value={newUserId} disabled/>
//         </div>

//         <div>
//             <label>User name:</label>
//             </div>
//             <div>
//         <input type='text' value={newUserName} placeholder='User Name' onChange={({target}) => setNewUserName(target.value)} required />
//         </div>

//         <div>
//         <label>First name:</label>
//         </div>
//             <div>
//         <input type='text' value={newFirstName} placeholder='First Name' onChange={({target}) => setNewFirstName(target.value)} />
//         </div>

//         <div>
//         <label>Last name:</label>
//         </div>
//             <div>
//         <input type='text' value={newLastName} placeholder='Last Name'  onChange={({target}) => setNewLastName(target.value)} />
//         </div>

//         <div>
//         <label>Email:</label>
//         </div>
//             <div>
//         <input type='text' value={newEmail} placeholder='Email' onChange={({target}) => setNewEmail(target.value)} />
//         </div>

//         <div>
//         <label>Accesslevel Id:</label>
//         </div>
//             <div>
//         <input type='text' value={newAccesslevelId} placeholder='Accesslevel Id' onChange={({target}) => setNewAccesslevelId(target.value)} />
//         </div>      

      

//         <input type='submit' value='save'/>
//         <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
//     </form>
  
//    </div>
//   )
// }

// export default UserEdit;


import './App.css';
import React, {useState} from 'react'
import UserService from './services/User';



const UserEdit = ({setMuokkaustila, setIsPositive, setShowMessage, setMessage, muokattavaUser }) => {

  //komponentin tilan määritys

const [newUserId, setNewUserId] = useState(muokattavaUser.UserId)
const [newUserName, setNewUserName] = useState(muokattavaUser.userName)
const [newFirstName, setNewFirstName] = useState(muokattavaUser.firstName)
const [newLastName, setNewLastName] = useState(muokattavaUser.lastName)
const [newEmail, setNewEmail] = useState(muokattavaUser.email)
const [newPassword, setNewPassword] = useState(muokattavaUser.Password)
const [newAccesslevelId, setNewAccesslevelId] = useState(muokattavaUser.accesslevelId)


const handleSubmit = (event) => {
        event.preventDefault()
        var newUser = {
        UserId: newUserId,
        userName: newUserName,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        Password: newPassword,
        accesslevelId: newAccesslevelId
            }



        UserService.update(newUser)
        .then(response => {
            if (response.status === 200) {
                setMessage("Edited user: " + newUser.userName)
                setIsPositive(true)
                setShowMessage(true)

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)

                setMuokkaustila(false)
            }

            })
            .catch(error => {
                setMessage("virhe")
                setIsPositive(false)
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 6000)

                setMuokkaustila(false)
            })         
            
            }
 
  return (
    <div id="edit">
    <h2>User Edit</h2>

    <form onSubmit={handleSubmit}>
        <div>
        <input type='text' value={newUserId} disabled/>
        </div>

        <div>
            <label>User name:</label>
            </div>
            <div>
        <input type='text' value={newUserName} placeholder='User Name' onChange={({target}) => setNewUserName(target.value)} required />
        </div>

        <div>
        <label>First name:</label>
        </div>
            <div>
        <input type='text' value={newFirstName} placeholder='First Name' onChange={({target}) => setNewFirstName(target.value)} />
        </div>

        <div>
        <label>Last name:</label>
        </div>
            <div>
        <input type='text' value={newLastName} placeholder='Last Name'  onChange={({target}) => setNewLastName(target.value)} />
        </div>

        <div>
        <label>Email:</label>
        </div>
            <div>
        <input type='text' value={newEmail} placeholder='Email' onChange={({target}) => setNewEmail(target.value)} />
        </div>
        
        <div>
        <label>Password:</label>
        </div>
            <div>
        <input type='text' value={newPassword} placeholder='Password' onChange={({target}) => setNewPassword(target.value)} />
        </div> 

        <div>
        <label>Accesslevel Id:</label>
        </div>
            <div>
        <input type='text' value={newAccesslevelId} placeholder='Accesslevel Id' onChange={({target}) => setNewAccesslevelId(target.value)} />
        </div>      

             

        <input type='submit' value='save'/>
        <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
    </form>
  
   </div>
  )
}

export default UserEdit;