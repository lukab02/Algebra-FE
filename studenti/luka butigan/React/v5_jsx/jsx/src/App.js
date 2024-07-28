import React from 'react';
import './App.css';

function App() {
  const name = 'Sara';

  const user = {
    firstName: 'Marko',
    lastName: 'Horvat',
  };

  const userOutput = `${user.firstName} - ${user.lastName}`;

  return (
    <React.Fragment>
      <p>Hello World!</p>
      <p>Moje ime je: {name}</p>
      <p>
        Moje ime je {user.firstName} a prezime je {user.lastName}
      </p>
      <p>Moje ime i prezime je:{userOutput}</p>
    </React.Fragment>
  );
}

export default App;
