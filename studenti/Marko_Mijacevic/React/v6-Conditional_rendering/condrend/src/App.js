
import React, { useState, useEffect } from 'react';
import './App.css';

function ConditionalRendering(props){

  const text = props.number === 1 && <h3>Ivan</h3>

  const { number } = props;

  return(
    <>
      <h2>Number?</h2>
      {!number && <h3>Nema broja</h3>}
      {text}
      { props.number === 2 && <h3>Luka</h3> }
      { number === 3 && <h3>Marko</h3> }
    </>
  );
}


function MojaKomponenta(){

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(()=>{

    try {
      //učitavanje podataka
      setLoading(true);
      
      setTimeout(()=>{
        setLoading(false);
        setData("Podatci učitani");  
      }, 5000)
  
  
    } catch(error) {
      setLoading(false);
      setErr(error)
    }

  },[])

  return(
    <>
    {!data && <p>Nema podataka</p>}
    <p>{data}</p>
    {isLoading && <p>Loading...</p>}
    {err && <p>Greška</p>}
    </>
  )

  // if(isLoading) return <p>Loading...</p>

  // if(data) return <p>{data}</p>

  // if(err) return <p>{err}</p>
}


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      number: null
    };
  }

  handleButtonClick(number) {
    this.setState((currState) => { 
      return {
        number: number
      };
    });
  };

  render(){
    return(
      <div>
        <p>Hello World!</p>
        <button onClick={() => this.handleButtonClick(1)}>1</button>
        <button onClick={() => this.handleButtonClick(2)}>2</button>
        <button onClick={() => this.handleButtonClick(3)}>3</button>
        <ConditionalRendering number={this.state.number} />
        <MojaKomponenta/>
      </div>
    );
  }

}

export default App;