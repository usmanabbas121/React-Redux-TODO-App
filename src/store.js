// import { createStore } from 'redux'
// import rootReducer from './reducer'

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString),
//   }
// }

// const store = createStore(rootReducer, preloadedState)

// export default store

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you  want to use here
  applyMiddleware()
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store
