import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import cardArrayReducer from "./cardArrayReducer";
import listReducer from "./listReducer";
import listArrayReducer from "./listArrayReducer";
import archivedReducers from "./archivedReducers";

const rootReducer = combineReducers({
    lists: listReducer,
    cardArray: cardArrayReducer,
    cards: cardReducer,
    listArray: listArrayReducer,
    archive: archivedReducers
});

export default rootReducer;
