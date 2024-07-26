import './App.css';
import Person from './Person';
import { sum } from './util';
import { broj1, broj2 } from './util';
import Osoba from './Person';
import { sum as broj } from './util';
import * as brojevi from './util';

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>{sum(19, 9)}</p>
      <p>{sum(broj1, broj2)}</p>
      <p>{Osoba.name}</p>
      <p>{broj(broj1, broj2)}</p>
      <p>{sum(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
