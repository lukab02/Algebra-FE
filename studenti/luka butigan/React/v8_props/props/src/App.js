import React from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './user';

const users = [
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
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} godine={users[0].years} />
        <UserClass ime={users[1].name} godine={users[1].years} />
        <UserChildren
          ime={users[2].name}
          godine={users[2].years}
          fontSize={'30px'}
        >
          boks
        </UserChildren>
        <UserChildren godine={users[2].years}>plivanje</UserChildren>
      </div>
    );
  }
}

export default App;
