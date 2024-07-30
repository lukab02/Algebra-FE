import React from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './user';

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

  render() {
    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React Aplikacija</h1>
        <p>Ovo zaista radi</p>
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              <UserFunction
                ime={user.name}
                godine={user.years}
                onNameChange={(event) => this.nameChangeHandler(event, 0)}
              />
            </li>
          ))}
        </ul>
        <UserFunction
          ime={users[0].name}
          godine={users[0].years}
          onNameChange={this.nameChangeHandler}
        />
        <UserClass ime={users[1].name} godine={users[1].years} />
        {/*         <UserChildren ime={users[2].name} godine={users[2].years}>
          boks
        </UserChildren> */}
        <UserChildren godine={users[2].years}>{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
}

export default App;
