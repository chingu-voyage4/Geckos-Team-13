import C from "../actions/types";

function addList(state, action) {
    const { payload } = action;
    const { listId, title, cards, position } = payload;

    const list = { listId, title, cards, position };

    return {
        ...state,
        [listId]: list
    };
}

function cardArray(state, action) {
    const { payload } = action;
    const { listId, cardId } = payload;

    const list = state[listId];

    return {
        ...state,
        [listId]: {
            ...list,
            cards: [...list.cards, cardId]
        }
    };
}

function editTitle(state, action) {
    const { payload } = action;
    const { title, listId } = payload;

    const list = state[listId];

    return {
        ...state,
        [listId]: {
            ...list,
            title
        }
    };
}

function insertItem(state, newIndex, cardId) {
    return [...state.slice(0, newIndex), cardId, ...state.slice(newIndex)];
}

function removeItem(state, curr) {
    return [...state.slice(0, curr), ...state.slice(curr + 1)];
}

function removeItemById(state, id) {
    const itemRemoved = state.filter(item => item !== id);
    return itemRemoved;
}

function moveCard(state, action) {
    const { payload } = action;
    const { oldpos, cardId, listId, newPosition } = payload;
    //bigger delete insert
    const list = state[listId];
    const current = oldpos;
    const cardArray = list.cards;

    const remove = removeItem(cardArray, current);
    const newCardArray = insertItem(remove, newPosition, cardId);

    return {
        ...state,
        [listId]: {
            ...list,
            cards: newCardArray
        }
    };
}

function moveCardToList(state, action) {
    const { payload } = action;
    const { cardId, selectedList, previousList, position } = payload;

    const prevList = state[previousList];
    const newList = state[selectedList];

    const prevListCardArr = removeItemById(prevList.cards, cardId);

    const newListCardArr = insertItem(state[selectedList].cards, position, cardId);

    return {
        ...state,
        [previousList]: {
            ...prevList,
            cards: prevListCardArr
        },
        [selectedList]: {
            ...newList,
            cards: newListCardArr
        }
    };
}

export default function(state = {}, action) {
    switch (action.type) {
        case C.ADD_LIST:
            return addList(state, action);
        case C.ADD_CARD:
            return cardArray(state, action);
        case C.EDIT_LIST_TITLE:
            return editTitle(state, action);
        case C.MOVE_CARD:
            return moveCard(state, action);
        case C.CHANGE_LIST:
            return moveCardToList(state, action);
        default:
            return state;
    }
}
