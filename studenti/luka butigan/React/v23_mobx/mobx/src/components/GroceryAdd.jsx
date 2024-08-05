import { useState } from 'react';
import { groceriesStore } from '../store/groceries-store';

function GroceryAdd() {
  const [grocery, setGrocery] = useState('');

  function groceryChangeHandler(e) {
    setGrocery(e.target.value);
  }

  function groceryAddHandler() {
    //Dodaj grocery u Mobx store
    groceriesStore.addGrocery(grocery);
    setGrocery('');
  }

  return (
    <>
      <label>
        Enter Grocery:
        <input type="text" value={grocery} onChange={groceryChangeHandler} />
      </label>
      <button onClick={groceryAddHandler}>Add</button>
    </>
  );
}

export default GroceryAdd;
