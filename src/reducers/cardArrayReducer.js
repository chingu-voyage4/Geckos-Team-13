import C from "../actions/types";

function cardArray(state, action) {
    const { payload } = action;
    const { cardId } = payload;

    return [...state, cardId];
}

export default function(state = [], action) {
    const { type } = action;

    switch (type) {
        case C.ADD_CARD:
            return cardArray(state, action);
        default:
            return state;
    }
}
