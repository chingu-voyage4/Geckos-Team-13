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

export default function(state = [], action) {
    switch (action.type) {
        case C.ARCHIVE_ALL_CARDS:
            return archiveAllCards(state, action);
        case C.ARCHIVE_CARD:
            return archiveCard(state, action);
        case C.RESTORE_CARD:
            console.log(removeCard(state, action));
            return removeCard(state, action);
        default:
            return state;
    }
}
