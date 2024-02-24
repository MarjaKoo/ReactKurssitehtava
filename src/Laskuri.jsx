import './App.css';
import React, {useState} from 'react'

//propsi otettu vastaan suoraan nimellä
const Laskuri = ({huomio}) => {

  //komponentin tilan määritys
const [luku, setLuku] = useState(0)
const reset = 0
  
  return (
    <>
    <h3>{luku}</h3>
      <button onClick={() => setLuku(luku + 1)}>+</button>
      <button onClick={() => setLuku(luku - 1)}>-</button>
      <button onClick={() => setLuku(reset)}>Reset</button>
      {/* Tai yksinkertaisemmin näin:
      <button onClick={() => setLuku(0)}>Reset</button> */}

      <button onClick={huomio}>HUOMIO</button>
    </>
  );
}

export default Laskuri;