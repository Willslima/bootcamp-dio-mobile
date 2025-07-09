import * as database from "./utils/database.js"
import { key, getDataFromApi } from "./utils/api.js"

console.log("hello ECMA")

database.connectDatabase("MY-DATA-25")

getDataFromApi()

database.disconnectDatabase()