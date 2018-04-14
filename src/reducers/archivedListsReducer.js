import C from "../actions/types";

function archiveList(state, action) {
    const { payload } = action;
    const { listId, position } = payload;

    const listItem = { listId, position };

    return [...state, listItem];
}

function removeList(state, action) {
    const { listId } = action.payload;

    return state.filter(item => item.listId !== listId);
}

export default function(state = [], action) {
    switch (action.type) {
        case C.ARCHIVE_LIST:
            return archiveList(state, action);
        case C.RESTORE_LIST:
            return removeList(state, action);
        default:
            return state;
    }
}
