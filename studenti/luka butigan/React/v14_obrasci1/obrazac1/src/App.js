import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state();
    alert(`Ime: ${name}`);

    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          {/*           <label htmlFor="name">Ime:</label>
          <input id="name" type="text" /> */}
          <label>
            Ime:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button>Send!</button>
        </form>
      </div>
    );
  }
}

export default App;
