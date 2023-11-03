//This is the place where we impliment the business logics

const lastId = 0;

//Since in the begining, the application the state
//is undefined => this cause to error when passing the argument as state to the reducer
//Therefore set empty array to the state argument as default
function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolced: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}

module.export = reducer;
