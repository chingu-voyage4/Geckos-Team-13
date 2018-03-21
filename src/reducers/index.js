import { combineReducers } from 'redux'
// import listReducer from './listReducer'
import cardReducer from './cardReducer'
import cardArrayReducer from './cardArrayReducer'
import listReducer from './listReducer'
import listArrayReducer from './listArrayReducer'

const rootReducer = combineReducers({
  lists: listReducer,
  cardArray: cardArrayReducer,
  cards: cardReducer,
  listArray: listArrayReducer
})

console.log(rootReducer)

export default rootReducer
