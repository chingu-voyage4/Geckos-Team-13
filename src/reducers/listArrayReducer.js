import C from "../actions/types";

function listArray(state, action) {
  const { payload } = action;
  const { listId } = payload;

  return [...state, listId];
}

function insertItem(state, newIndex, listId) {
  return [...state.slice(0, newIndex), listId, ...state.slice(newIndex)];
}

function removeItem(state, curr) {
  return [...state.slice(0, curr), ...state.slice(curr + 1)];
}

function moveList(state, action) {
  const { payload } = action;
  const { listId, newPosition } = payload;

  const current = state.indexOf(listId);

  // delete then insert
  if (newPosition > current) {
    const idRemoved = removeItem(state, current);
    return insertItem(idRemoved, newPosition, listId);
  } else {
    const idRemoved = removeItem(state, current);
    return insertItem(idRemoved, newPosition, listId);
  }
}

export default function(state = [], action) {
  const { type } = action;

  switch (type) {
    case C.ADD_LIST:
      return listArray(state, action);
    case C.MOVE_LIST:
      return moveList(state, action);
    default:
      return state;
  }
}
