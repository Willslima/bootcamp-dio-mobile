const product = require("./services/products")
const config = require("./services/config")
const dataBase = require("./services/database")

async function main() {
    console.log("Hello my name's system")
    
    product.getFullName("408","Mousepad")
    product.getProductName("Mouse")

    // console.log(config.devArea.production)
    // console.log(config.client.device)
    // console.log(product.productType.version)
    
    console.log("Carrinho compras:")

    dataBase.connectToDatabase(
        "Produtos da vitrine"
    )
}

main()