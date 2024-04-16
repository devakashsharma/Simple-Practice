function removeDuplicates(cart) {
    const uniqueItems = {};
    const newCart = [];
    
    cart.forEach(item => {
        if (!uniqueItems[item]) {
            uniqueItems[item] = true;
            newCart.push(item);
        }
    });
    
    return newCart;
}

const customerCart = ["item1", "item2", "item3", "item1", "item4", "item2"];
const cleanCart = removeDuplicates(customerCart);
console.log("Original Cart:", customerCart);
console.log("Cart without Duplicates:", cleanCart);
