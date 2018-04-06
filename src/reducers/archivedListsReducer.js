import C from "../actions/types";

function archiveList(state, action) {
    const { payload } = action;
    const { listId, position } = payload;

    const listItem = { listId, position };

    return [...state, listItem];
}

export default function(state = {}, action) {
    switch (action.type) {
        case C.ARCHIVE_LIST:
            return archiveList(state, action);
        default:
            return state;
    }
}
