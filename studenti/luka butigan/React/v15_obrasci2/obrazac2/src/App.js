import React from 'react';
import './App.css';
import { User, NewUser } from './user';

class App extends React.Component {
  state = {
    users: [
      {
        id: '1',
        name: 'Luka',
        years: 22,
      },
      {
        id: '2',
        name: 'Sara',
        years: 20,
      },
      {
        id: '3',
        name: 'Ante',
        years: 26,
      },
      {
        id: '4',
        name: 'Karla',
        years: 24,
      },
    ],
    childrenText: 'Plivanje',
  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    this.setState({ users: newUsers });
  };

  nameChangeHandler = (event) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[0].name = event.target.value;

    this.setState({ users: newUsers });
  };

  addUserHandler = ({ name, age }) => {
    const { users } = this.state;

    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name: name,
      years: age,
    };
    const newUsers = [...users, newUser];

    this.setState({ users: newUsers });
  };

  render() {
    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
        {users.map((user, index) => (
          <User
            key={user.id}
            ime={user.name}
            godine={user.years}
            onNameChange={(event) => this.nameChangeHandler(event, 0)}
          />
        ))}
        <hr />
        <NewUser onAddUser={this.addUserHandler} />
      </div>
    );
  }
}

export default App;
