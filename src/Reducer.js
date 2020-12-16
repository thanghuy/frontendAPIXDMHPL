import { combineReducers } from "redux";
import User from './Features/User/Reducer';
import Cart from  './Features/Cart/Reducer';
const rootReducer = combineReducers({
    User : User,
    Cart : Cart
})
export default rootReducer;