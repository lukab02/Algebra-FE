import React, { useState } from 'react';
import './App.css';

function Child({ title, onBtnClick }) {
  let msg = 'Bye';

  return (
    <>
      <h2>Child: {title}</h2>
      <button onClick={() => onBtnClick(msg)}>Promijeni Parent</button>
    </>
  );
}

function Parent() {
  const [message, setMessage] = useState('Hello World');

  function btnClick(newMessage) {
    setMessage(newMessage);
  }

  return (
    <>
      <h2>Parent: {message} </h2>
      <Child title="Moje dijete" onBtnClick={btnClick} />
    </>
  );
}

function App() {
  const [counter, setCounter] = useState();

  function btnClickHandler() {
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
  }

  return (
    <div className="App">
      <p>Brojač: {counter}</p>
      <button onClick={btnClickHandler}>Uvečaj brojač</button>
      <p>{Parent}</p>
    </div>
  );
}

export default App;
