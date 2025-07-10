import * as cartService from "./services/cart.js"
import createItem from "./services/items.js"

const myCart = []
const myWishList = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("Controle PS5", 399.00, 2)
const item2 = await createItem("PS5 with Spider-man Miles Morales", 4399.00, 1)
const item3 = await createItem("Jogos", 249, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)

await cartService.deleteItem(myCart, item1.name)

await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart)
