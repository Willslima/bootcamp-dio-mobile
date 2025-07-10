//function of cart

// use case

// add item on cart
async function addItem(userCart, item) {
    userCart.push(item)
}

// sum values of items
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=>
        total + item.subtotal(), 0
)
console.log(`🎁 Shopee cart Total is: R$`, result)
}

// delete item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name == name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// remove item
async function removeItem(userCart, index) {
    if(index >= 0 && index < userCart.length){

    }
}

async function displayCart(userCart) {
    userCart.forEach((element, index) => {
        console.log(`${index + 1}. ${element.name} - R$${element.price} | Quantity: ${element.quantity}x | Subtotal R$${element.subtotal()}`)
    });
}

export { 
    addItem, 
    calculateTotal, 
    deleteItem, 
    removeItem,
    displayCart
}