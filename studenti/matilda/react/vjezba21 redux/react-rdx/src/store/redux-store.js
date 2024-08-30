import { createStore } from "redux";

export const ADD_COUNT = "ADD_COUNT";
export const SUBTRACT_COUNT = "SUBTRACT_COUNT";
export const RESET = "RESET";

// definirati stanje

const initialState = {
  counter: 0,
};

//definirati reducer funkciju

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { counter: state.counter + action.payload };

    case SUBTRACT_COUNT:
      return { counter: state.counter - action.payload };

    case RESET:
      return { counter: 0 };

    default:
      return state;
  }
};

// definirati store - export

const store = createStore(reducer);
export default store;
