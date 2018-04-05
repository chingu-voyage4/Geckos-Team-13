import C from "../actions/types";

function archiveAllCards(state = [], action) {
    const { payload } = action;
    const { cardArrWithPositions } = payload;

    return state.concat(cardArrWithPositions);
}

export default function(state = [], action) {
    switch (action.type) {
        case C.ARCHIVE_ALL_CARDS:
            console.log(archiveAllCards(state, action));
            return archiveAllCards(state, action);
        default:
            return state;
    }
}
