import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

//configurar la store de redux

const intialState = {};

export const store = configureStore({ reducer: { root: rootReducer, state: intialState } }, composeWithDevTools(
    applyMiddleware(thunk)
))


export const persistor = persistStore(store)