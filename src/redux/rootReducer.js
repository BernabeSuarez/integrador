import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import menuReducer from './menu/menuReducer'
import cartReducer from './carro/cartReducer'
import ProductsReducer from './products/productsReducer'


const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: ['cart']
}
const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
    products: ProductsReducer,
})

export default persistReducer(persistConfig, rootReducer)