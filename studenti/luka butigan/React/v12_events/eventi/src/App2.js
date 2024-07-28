import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello',
    };
    this.btn1ClickHandler = this.btn1ClickHandler.bind(this);
  }

  btn1ClickHandler() {
    this.setState({ text: 'Sara' });
  }

  btn2ClickHandler = () => {
    this.setState({ text: 'Luka' });
  };

  render() {
    return (
      <div className="App">
        <h1>Class Komponenta stanje dodatno</h1>
        <h2>{this.state.text}</h2>
        <button onClick={this.btn1ClickHandler}>Promjeni tekst 1</button>
        <button onClick={this.btn2ClickHandler}>Promjeni tekst 2</button>
      </div>
    );
  }
}

export default App;
