import { useState } from 'react';
import './App.css';

import { UserFunction, UserClass, UserChildren } from './user';

function App() {

const [users, setUsers ] = useState([
      {
        name: "Ivan",
        years: 30
      },
      {
        name: "Marko",
        years: 20
      },
      {
        name: "Ana",
        years: 23
      }
    ],
);

    const [childrenText, setChildrenText ] = useState("plivanje");


  btnClickHandler = () => {


   const newUsers = this.state.users.map(user) => {
      return { ...user, years: user.years + 1 };
    } 

    setusers: newUsers};
  }

// render() {

  const { users, childrenText } this.state;

  return (
    <div className="App">
     <h1>react app </h1>
     <p>ovo je app</p>
     <UserFunction ime={users[0].name} godine={users[0].years} />
     <UserFunction ime={users[1].name} godine={users[1].years}/>
     <UserChildren ime={users[2].name} godine={users[2].years}/>
     <UserChildren godine={users[2].years}></UserChildren>
     <button onClick={btnClickHandler}>Promjena godina</button>
     
     {/* plivanje</UserChildren> */}
    </div>
  );
}


export default App;