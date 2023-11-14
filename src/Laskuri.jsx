import './App.css';
import React, {useState} from 'react'


const Laskuri = (props) => {

  //komponentin tilan määritys
const [luku, setLuku] = useState(0)
const reset = 0
  
  return (
    <>
    <h3>{luku}</h3>
      <button onClick={() => setLuku(luku + 1)}>+</button>
      <button onClick={() => setLuku(luku - 1)}>-</button>
      <button onClick={() => setLuku(reset)}>Reset</button>

      <button onClick={props.huomio}>HUOMIO</button>
    </>
  );
}

export default Laskuri;