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

export default function(state = {}, action) {
    switch (action.type) {
        case C.ADD_LIST:
            return addList(state, action);
        case C.ADD_CARD:
            return cardArray(state, action);
        case C.EDIT_LIST_TITLE:
            return editTitle(state, action);
        default:
            return state;
    }
}
