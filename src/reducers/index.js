import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import cardArrayReducer from "./cardArrayReducer";
import listReducer from "./listReducer";
import listArrayReducer from "./listArrayReducer";
import archivedLists from "./archivedLists";
import archivedCards from "./archivedCards";

const rootReducer = combineReducers({
    lists: listReducer,
    cardArray: cardArrayReducer,
    cards: cardReducer,
    listArray: listArrayReducer,
    archivedLists: archivedLists,
    archivedCards: archivedCards
});

export default rootReducer;
