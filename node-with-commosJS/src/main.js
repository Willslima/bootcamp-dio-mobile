const product = require("./services/products")

async function main() {
    console.log("Hello my name's system")
    product.getFullName("408","Mousepad")
    
}

main()