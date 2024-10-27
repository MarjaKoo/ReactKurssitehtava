import './App.css';
import React, {useState, useEffect} from 'react'
import UserService from './services/User';
import User from './User';
import UserAdd from './UserAdd';
import UserEdit from './UserEdit';


const UserList = ({setIsPositive, setShowMessage, setMessage}) => {

  //komponentin tilan määritys
const [users, setUsers] = useState([])
const [näytäUsers, setNäytäUsers] = useState(false)
const [lisäystila, setLisäysTila] = useState(false)
const [muokkaustila, setMuokkausTila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaUser, setMuokattavaUser] = useState(false)
const [search, setSearch] = useState("")


useEffect( () => {
 UserService.getAll()
 .then(data => {
    setUsers(data)
 })
},[lisäystila, reload, muokkaustila]
)   

//hakukentän onChange tapahtumankäsittelijä
const handleSearchInputChange = (event) => {
  setNäytäUsers(true)
  setSearch(event.target.value.toLowerCase())
}

const editUser = (user) => {
setMuokattavaUser(user)
setMuokkausTila(true)
}

  return (
    <>
    
    <h1><nobr style={{ cursor: 'pointer' }}
            onClick={() => setNäytäUsers(!näytäUsers)}>Users</nobr>

            
            {!lisäystila && <button className='nappi' onClick={() => setLisäysTila(true)}>Add new</button>}</h1>

            <div>
            {!lisäystila && !muokkaustila &&
            <input placeholder='Search by user name' value={search} onChange={handleSearchInputChange} />
            }
           </div>

            {lisäystila && <UserAdd setLisäystila={setLisäysTila}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            />}

            {muokkaustila && <UserEdit setMuokkaustila={setMuokkausTila}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            muokattavaUser={muokattavaUser}
            />}
            
            {
            !lisäystila && !muokkaustila && näytäUsers && users && users.map( u => 
              {
                const lowerCaseName = u.firstName.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
              return(
            <User key={u.userId} user={u} reloadNow={reloadNow} reload={reload}
            setIsPositive={setIsPositive} setShowMessage={setShowMessage} setMessage={setMessage}
            editUser={editUser}
            />
            
           )
          }
        }
          )
           }   
   </>
  )
          }
          

export default UserList