// use cases

// create item with total sum
export default async function createItem(name, price, quantity) {
    return {
        name,
        price, 
        quantity,
        subtotal : () => price * quantity
    }
}