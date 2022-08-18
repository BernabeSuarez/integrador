import { productsItems, ProductsCategories } from '../../data/data'


const INITIAL_STATE = {
    products: productsItems,
    categories: ProductsCategories
}
const ProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.yype) {
        default: return state
    }
}
export default ProductsReducer