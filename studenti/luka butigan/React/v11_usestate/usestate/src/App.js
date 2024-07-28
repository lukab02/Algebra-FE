import { useState } from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './user';

function App() {
  const [users, setUsers] = useState([
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
  ]);
  const [childrenText, setChildrenText] = useState('Plivanje');

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    setUsers(newUsers);
  };

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
      <UserChildren godine={users[2].years}>{childrenText}</UserChildren>
      <button onClick={btnClickHandler}>Promjena godina</button>
    </div>
  );
}

export default App;
