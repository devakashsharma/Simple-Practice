function fixQuantity(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;
    }
    return cart;
}


const cart = [2, 6, 4, 8, 6];
console.log(fixQuantity(cart));