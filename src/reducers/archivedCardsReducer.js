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

export default function(state = [], action) {
    switch (action.type) {
        case C.ARCHIVE_ALL_CARDS:
            return archiveAllCards(state, action);
        case C.ARCHIVE_CARD:
            return archiveCard(state, action);
        default:
            return state;
    }
}
