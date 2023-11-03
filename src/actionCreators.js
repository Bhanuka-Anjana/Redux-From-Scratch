const actions =require ("./actionTypes");

const bugAdded = (descption) => ({
  type: actions.BUG_ADDED,
  payload: descption,
});
module.export ={
  bugAdded
}