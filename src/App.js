import React, {useState, useEffect} from 'react';
import './App.css';
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList from './CustomersList';
import UserList from './UserList';
import Message from './Message';
import Login from './Login';


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {

  // App-komponentin tila

const [showLaskuri, setShowLaskuri] = useState(false)
  // Statet messagen näyttämistä varten
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(true)
const [showMessage, setShowMessage] = useState('')
const [loggedInUser, setLoggedInUser] = useState('')

useEffect(() => {
  let storedUser = localStorage.getItem("username")
  if (storedUser !== null) {
    setLoggedInUser(storedUser)
  }
},[])


// Logout napin tapahtumankäsittelijä
const logout = () => {
  localStorage.clear()
  setLoggedInUser('')
}
 
  return (
    <div className="App">

{!loggedInUser && <Login setMessage={setMessage} setIsPositive={setIsPositive} 
                setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser} />}

{ loggedInUser && 


      <Router>

     <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to={'/Customers'} className='nav-link'>Customers</Link>
        <Link to={'/Users'} className='nav-link'>Users</Link>
        <Link to={'/Laskuri'} className='nav-link'>Laskuri</Link>
        <Link to={'/Posts'} className='nav-link'>Typicode posts</Link>
        <button onClick={() => logout()}>Logout</button>
      </Nav>
     </Navbar>

     <h2>Northwind traders</h2>
     
      {showMessage && <Message message={message} isPositive={isPositive} /> }

      <Routes>
          <Route path="/customers"
          element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>

          <Route path="/users"
          element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>

          <Route path="/posts"
          element={<Posts />}>
          </Route>
          
          <Route path="/laskuri" 
          element={<Laskuri />}>
        </Route>
        
        </Routes>
      </Router>
}
    </div>

      



      
   
  )
}

export default App;
