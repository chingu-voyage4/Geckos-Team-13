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
    listId,
    archived
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
            listId,
            archived
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

export function archiveAllCardsInList(cardArrWithPositions, listId) {
    return {
        type: C.ARCHIVE_ALL_CARDS,
        payload: {
            cardArrWithPositions,
            listId
        }
    };
}

export function archiveCard(card) {
    return {
        type: C.ARCHIVE_CARD,
        payload: { card }
    };
}

export function moveAllCards(currListId, newListId) {
    return {
        type: C.MOVE_ALL_CARDS,
        payload: { currListId, newListId }
    };
}

export function restoreCard(cardId, position, listId, archived) {
    return {
        type: C.RESTORE_CARD,
        payload: { cardId, position, listId, archived }
    };
}

export function restoreList(listId, position) {
    return {
        type: C.RESTORE_LIST,
        payload: { listId, position }
    };
}

export function updateArchived(cardId, selectedList, position, oldpos) {
    return {
        type: C.UPDATE_ARCHIVED_CARD,
        payload: { cardId, selectedList, position, oldpos }
    };
}
