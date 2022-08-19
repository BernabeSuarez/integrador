export const addItemToCart = (cartItems, cartItemToAdd) => {    //revisa si existe el item
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 } //si existe agrega uno a la cantidad del mismo item
                : cartItem;
        })
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]  // si no existe suma el nuevo item
}