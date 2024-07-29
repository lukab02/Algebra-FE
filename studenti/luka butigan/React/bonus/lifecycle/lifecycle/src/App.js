import React, { useEffect, useState } from 'react';
import './App.css';

function FunkcijskaKomponenta() {
  const [poruka, setPoruka] = useState('Hi');
  const [repos, setRepos] = useState([]);

  //componentDidUpdate
  useEffect(() => {
    console.log('useEffect 1');
  });

  //componentDidMount
  useEffect(() => {
    console.log('useEffect 2');
    getList();

    //"componentWillUnmount" - prije novog useEffect
    return () => {
      //Clean up function
    };
  }, []);

  function btnChangeHandler() {
    setPoruka('Dobar dan');
  }

  function getList() {
    fetch('https://api.github.com/users/facebook/repos')
      .then((response) => response.json())
      .then((responseData) => {
        setRepos(responseData);
      });
  }

  return (
    <>
      <h2>Funkcijska Komponenta "Lifecycle Metode"</h2>
      <p>{poruka}</p>
      <button onClick={btnChangeHandler}>Promjeni</button>
      {repos.map((repo, index) => (
        <div key={index}>
          <p>{repo.name}</p>
        </div>
      ))}
    </>
  );
}

class ClassKomponenta extends React.Component {
  constructor() {
    super();
    this.state = {
      poruka: 'Hi',
      repos: [],
    };
  }

  getList = () => {
    fetch('https://api.github.com/users/facebook/repos')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ repos: responseData });
      });
  };

  UNSAFE_componentWillMount() {
    /* alert('ClassKomponenta will mount'); */
  }

  componentDidMount() {
    /*  alert('ClassKomponenta did mount'); */
    this.getList();
  }

  UNSAFE_componentWillMount() {
    console.log('Class Komponenta will update');
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log('Class Komponenta did update');
  }

  btnChangeHandler() {
    this.setState({ poruka: 'Dobar dan' });
  }

  render() {
    const { poruka, repos } = this.state;
    return (
      <>
        <h2>ClassKomponenta Lifecycle Metode</h2>
        <p>{poruka}</p>
        <button onClick={this.btnChangeHandler.bind(this)}>Promjeni</button>
        {repos.map((repo, index) => (
          <div key={index}>
            <p>{repo.name}</p>
          </div>
        ))}
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <ClassKomponenta /> */}
      <FunkcijskaKomponenta />
    </div>
  );
}

export default App;
