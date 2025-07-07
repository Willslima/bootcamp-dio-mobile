const { getFullName, getProductName } = require("./services/products")
const config = require("./services/config")
const dataBase = require("./services/database")

async function main() {
    console.log("Carrinho de compras: ")
    
    getFullName("1","Teclado")
    getFullName("2","Mouse")

    getProductName("Mouse")

    dataBase.connectToDatabase("my-data")
}

main()