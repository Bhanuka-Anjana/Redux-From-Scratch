const store = require("./src/customStore");
import { bugAdded } from "./src/actionCreators";

store.subscribe(()=>{
    console.log("Store changed");
})

store.dispatch(bugAdded("bug 01"));
console.log(store.getState());
