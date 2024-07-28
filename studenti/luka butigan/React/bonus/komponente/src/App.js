import React, { useState } from 'react';
import './App.css';

function FunkcijskaKomponenta({ children, name, years, city, onAppSt }) {
  const [fnStanje, setFnStanje] = useState('fn početno stanje');
  function btnClickHandler(event) {
    setFnStanje('Fn novo stanje');
  }

  return (
    <>
      <p>{fnStanje}</p>
      <h2>{children} Komponenta</h2>
      <p>Ime: {name}</p>
      <p>Years: {years}</p>
      <p>City: {city}</p>
      <button onClick={btnClickHandler}>Promijeni lokalno stanje</button>
      <button
        onClick={() => onAppSt('App novo stanje iz funkcijske komponente')}
      >
        Promijeni App stanje
      </button>
    </>
  );
}

class ClassKomponenta extends React.Component {
  constructor() {
    super();
    this.state = {
      classStanje: 'Class početno stanje',
    };
  }

  /*   btnClickHandler() {
    this.setState({ classStanje: 'Class novo stanje' });
  } */
  btnClickHandler = () => {
    this.setState({ classStanje: 'Class novo stanje' });
  };

  render() {
    const { classStanje } = this.state;
    const { children, name, years, city, onAppSt } = this.props;
    return (
      <>
        <p>{classStanje}</p>
        <h2>{children} Komponenta</h2>
        <p>Ime: {name}</p>
        <p>Godine: {years}</p>
        <p>Grad : {city}</p>
        {/*        <button onClick={this.btnClickHandler.bind(this)}>
          Promijeni lokalno stanje
        </button> */}
        <button onClick={this.btnClickHandler}>Promijeni lokalno stanje</button>
        <button onClick={() => onAppSt('App novo stanje iz class komponente')}>
          Promijeni App stanje
        </button>
      </>
    );
  }
}

function App() {
  const [appStanje, setAppStanje] = useState('App početno stanje');

  function AppStanjeHandler(novoStanje) {
    setAppStanje(novoStanje);
  }

  return (
    <div className="App">
      {appStanje}
      <h1>App Komponenta</h1>
      <FunkcijskaKomponenta
        name="Sara"
        years={20}
        city="Zagreb"
        onAppSt={AppStanjeHandler}
      >
        Funkcijska
      </FunkcijskaKomponenta>
      <ClassKomponenta
        name="Luka"
        years={22}
        city="Velika Gorica"
        onAppSt={AppStanjeHandler}
      >
        Class
      </ClassKomponenta>
    </div>
  );
}

export default App;
