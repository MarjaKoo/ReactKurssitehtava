import React, {useState} from 'react';
import './App.css';
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList from './CustomersList';
import Message from './Message';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = () => {

  // App-komponentin tila

const [showLaskuri, setShowLaskuri] = useState(false)
  // Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)
const [showPosts, setShowPosts] = useState(false)

const huomio = () => {
  alert("Huomio!")
}
  
  return (
    <div className="App">
      <h1>Hello from React!</h1>

      {showMessage && <Message message={message} isPositive={isPositive} /> }

      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />

      {/* <Posts /> */}

      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      {showPosts && <button onClick={() => setShowPosts(!showPosts)}>Piilota postausotsikko</button>}

      {!showPosts && <button onClick={() => setShowPosts(!showPosts)}>Näytä postausotsikko</button>}

      {showLaskuri && <Laskuri huomio={huomio} />}
      {showPosts && <Posts posts={Posts} />}

      {/* tämä ja edellinen ovat täysin samat tavat
      {showLaskuri === true ? <Laskuri /> : null} 
      {showLaskuri === true ? <Laskuri /> : <button>näytä</button>}  */}       

      <Viesti teksti="tervehdys app komponentista" />


    </div>
  );
}

export default App;
