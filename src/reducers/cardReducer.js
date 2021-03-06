import C from "../actions/types";

function addCard(state, action) {
    const { payload } = action;
    const {
        cardId,
        position,
        title,
        description,
        members,
        labels,
        dueDate,
        comments,
        listId,
        archived
    } = payload;

    // Create our new Comment object
    // Evevntually this would nice
    const card = {
        position,
        title,
        description,
        members,
        labels,
        dueDate,
        comments,
        listId,
        archived
    };

    // Insert the new Comment object into the updated lookup table
    return {
        ...state,
        [cardId]: card
    };
}

function cardTitle(state, action) {
    const { payload } = action;
    const { title, cardId } = payload;

    const card = state[cardId];

    return {
        ...state,
        [cardId]: {
            ...card,
            title
        }
    };
}

function cardDescription(state, action) {
    const { payload } = action;
    const { description, cardId } = payload;

    const card = state[cardId];

    return {
        ...state,
        [cardId]: {
            ...card,
            description
        }
    };
}

function cardComments(state, action) {
    const { payload } = action;
    const { comment, cardId } = payload;

    const card = state[cardId];
    return {
        ...state,
        [cardId]: {
            ...card,
            comments: [...card.comments, comment]
        }
    };
}

function deleteComment(state, action) {
    const { payload } = action;
    const { commentId, cardId } = payload;

    const card = state[cardId];
    return {
        ...state,
        [cardId]: {
            ...card,
            comments: card.comments.filter(comment => comment.commentId !== commentId)
        }
    };
}

function updateListId(state, action) {
    const { payload } = action;
    const { cardId, selectedList } = payload;

    const card = state[cardId];
    return {
        ...state,
        [cardId]: {
            ...card,
            listId: selectedList
        }
    };
}

function archivedTrue(state, action) {
    const { payload } = action;
    const { cardId, archived } = payload.card;
    const card = state[cardId];

    return {
        ...state,
        [cardId]: {
            ...card,
            archived
        }
    };
}

function archivedFalse(state, action) {
    const { payload } = action;
    const { cardId, archived } = payload;
    const card = state[cardId];

    return {
        ...state,
        [cardId]: {
            ...card,
            archived
        }
    };
}

export default function(state = {}, action) {
    switch (action.type) {
        case C.ADD_CARD:
            return addCard(state, action);
        case C.EDIT_CARD_TITLE:
            return cardTitle(state, action);
        case C.EDIT_CARD_DESCRIPTION:
            return cardDescription(state, action);
        case C.ADD_COMMENT:
            return cardComments(state, action);
        case C.DELETE_COMMENT:
            return deleteComment(state, action);
        case C.CHANGE_LIST:
            return updateListId(state, action);
        case C.RESTORE_CARD:
            return archivedFalse(state, action);
        case C.ARCHIVE_CARD:
            return archivedTrue(state, action);
        case C.UPDATE_ARCHIVED_CARD:
            return updateListId(state, action);
        default:
            return state;
    }
}
