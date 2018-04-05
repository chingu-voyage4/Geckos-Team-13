import C from "../actions/types";

function listArray(state, action) {
    const { payload } = action;
    const { listId } = payload;

    return [...state, listId];
}

function insertItem(state, newIndex, listId) {
    return [...state.slice(0, newIndex), listId, ...state.slice(newIndex)];
}

function removeItem(state, curr) {
    return [...state.slice(0, curr), ...state.slice(curr + 1)];
}

function moveList(state, action) {
    const { payload } = action;
    const { listId, newPosition } = payload;

    const current = state.indexOf(listId);

    // delete then insert
    if (newPosition > current) {
        const idRemoved = removeItem(state, current);
        return insertItem(idRemoved, newPosition, listId);
    } else {
        const idRemoved = removeItem(state, current);
        return insertItem(idRemoved, newPosition, listId);
    }
}

function removeItemById(state, id) {
    const itemRemoved = state.filter(item => item !== id);
    return itemRemoved;
}

function removeListFromArray(state, action) {
    const { payload } = action;
    const { listId } = payload;

    const listRemoved = removeItemById(state, listId);
    return listRemoved;
}

export default function(state = [], action) {
    const { type } = action;

    switch (type) {
        case C.ADD_LIST:
            return listArray(state, action);
        case C.MOVE_LIST:
            return moveList(state, action);
        case C.ARCHIVE_LIST:
            return removeListFromArray(state, action);
        default:
            return state;
    }
}
