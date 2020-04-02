import { combineReducers } from "redux";
import cart from "./cart";
import ui from "./ui";

export default combineReducers({
    cart,
    ui
});
