import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Users from "../reducers/user.reducer";

const combine = combineReducers({
  users: Users,
});
const Store = createStore(combine, applyMiddleware(thunk));
export default Store;
