import C from "./types";

export function editListTitle(title, listId) {
    return {
        type: C.EDIT_LIST_TITLE,
        payload: {
            title,
            listId
        }
    };
}

export function addCard(
    cardId,
    position,
    title,
    description,
    members,
    labels,
    dueDate,
    comments,
    listId
) {
    return {
        type: C.ADD_CARD,
        payload: {
            cardId,
            position,
            title,
            description,
            members,
            labels,
            dueDate,
            comments,
            listId
        }
    };
}

export function addList(listId, title, cards, position) {
    return {
        type: C.ADD_LIST,
        payload: {
            listId,
            title,
            cards,
            position
        }
    };
}

export function editCardTitle(title, cardId) {
    return {
        type: C.EDIT_CARD_TITLE,
        payload: {
            title,
            cardId
        }
    };
}

export function editCardDescription(description, cardId) {
    return {
        type: C.EDIT_CARD_DESCRIPTION,
        payload: {
            description,
            cardId
        }
    };
}

export function addComment(comment, cardId) {
    return {
        type: C.ADD_COMMENT,
        payload: {
            comment,
            cardId
        }
    };
}

export function deleteComment(commentId, cardId) {
    return {
        type: C.DELETE_COMMENT,
        payload: {
            commentId,
            cardId
        }
    };
}

export function moveList(listId, newPosition) {
    return {
        type: C.MOVE_LIST,
        payload: {
            listId,
            newPosition
        }
    };
}

export function moveCard(oldpos, cardId, listId, newPosition) {
    return {
        type: C.MOVE_CARD,
        payload: {
            oldpos,
            cardId,
            listId,
            newPosition
        }
    };
}

export function moveCardToNewList(cardId, listId, selectedList, previousList, position) {
    return {
        type: C.CHANGE_LIST,
        payload: {
            cardId,
            listId,
            selectedList,
            previousList,
            position
        }
    };
}

export function archiveList(listId, position) {
    return {
        type: C.ARCHIVE_LIST,
        payload: {
            listId,
            position
        }
    };
}
