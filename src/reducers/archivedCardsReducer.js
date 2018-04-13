import C from "../actions/types";

function archiveAllCards(state, action) {
    const { payload } = action;
    const { cardArrWithPositions } = payload;

    return state.concat(cardArrWithPositions);
}

function archiveCard(state, action) {
    const { payload } = action;
    const { card } = payload;

    return [...state, card];
}

function removeCard(state, action) {
    const { cardId } = action.payload;

    return state.filter(item => item.cardId !== cardId);
}

function updateOneItem(state, action) {
    const { cardId, selectedList, position } = action.payload;

    const updated = state.filter(item => item.cardId !== cardId);
    updated.listId = selectedList;
    updated.position = position;

    return state.map(item => {
        if (item.cardId !== cardId) {
            return item;
        }

        item.listId = selectedList;

        return {
            ...item,
            ...updated
        };
    });
}

export default function(state = [], action) {
    switch (action.type) {
        case C.ARCHIVE_ALL_CARDS:
            return archiveAllCards(state, action);
        case C.ARCHIVE_CARD:
            return archiveCard(state, action);
        case C.RESTORE_CARD:
            return removeCard(state, action);
        case C.UPDATE_ARCHIVED_CARD:
            return updateOneItem(state, action);
        default:
            return state;
    }
}
