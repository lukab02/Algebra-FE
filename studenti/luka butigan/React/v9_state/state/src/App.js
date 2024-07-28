import React from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './user';

class App extends React.Component {
  state = {
    users: [
      {
        name: 'Luka',
        years: 22,
      },
      {
        name: 'Sara',
        years: 20,
      },
      {
        name: 'Ante',
        years: 26,
      },
      {
        name: 'Karla',
        years: 24,
      },
    ],
    childrenText: 'Plivanje',
  };

  render() {
    return (
      <div className="App">
        <h1>React Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction
          ime={this.state.users[0].name}
          godine={this.state.users[0].years}
        />
        <UserClass
          ime={this.state.users[1].name}
          godine={this.state.users[1].years}
        />
        <UserChildren
          ime={this.state.users[2].name}
          godine={this.state.users[2].years}
          fontSize={'30px'}
        >
          boks
        </UserChildren>
        <UserChildren godine={this.state.users[2].years}>
          {this.state.childrenText}
        </UserChildren>
      </div>
    );
  }
}

export default App;
