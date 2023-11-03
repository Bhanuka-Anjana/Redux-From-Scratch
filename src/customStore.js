const reducer = require("./reducer");

function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    //Call the reducer to get the new state
    state = reducer(state, action);

    // Notify the subscribers
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}
module.exports = createStore(reducer);
