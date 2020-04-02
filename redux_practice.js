// let store = createStore(reducer)
// Store => globalized state


// Action => what you want to do (Increment)
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}
// Reducer => how actions transform state into the next state 
// reducer checks what action is performed and modifies store 
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT": 
    return state + 1;
    case "DECREMENT":
    return state - 1;
  } 
};

let store = createStore(counter);

// Display in console
store.subscribe(() => console.log(store.getState()));

// Dispatch => how action is executed 
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

