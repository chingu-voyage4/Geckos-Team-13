import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import cardArrayReducer from "./cardArrayReducer";
import listReducer from "./listReducer";
import listArrayReducer from "./listArrayReducer";
import archivedListsReducer from "./archivedListsReducer";
import archivedCardsReducer from "./archivedCardsReducer";

const rootReducer = combineReducers({
    lists: listReducer,
    cardArray: cardArrayReducer,
    cards: cardReducer,
    listArray: listArrayReducer,
    archivedListsReducer: archivedListsReducer,
    archivedCards: archivedCardsReducer
});

export default rootReducer;
