const calculateCart = (cart) => {
    let cost = 0;

    cart.forEach(item => {
        cost = item.price * item.quantity;
    });

    return cost;
}

// now;
const cart = [
    {
        product: "item1",
        price: 23,
        quantity: 1
    },
    {
        product: "item2",
        price: 27,
        quantity: 2,
    },
    {
        product: "item3",
        price: 83,
        quantity: 1,
    },
    {
        product: "item4",
        price: 20,
        quantity: 4,
    },
]

const totalCost = calculateCart(cart);
console.log(`Total cost: ${totalCost}`);