import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import menuReducer from './menu/menuReducer'
import cartReducer from './carro/cartReducer'


const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: []
}
const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)