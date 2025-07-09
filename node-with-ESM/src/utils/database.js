const userType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectDatabase(dataName) {
    console.log(`Database ${dataName} connected`)
}

async function disconnectDatabase(params) {
    console.log(`Database disconnected..`)
}

export {connectDatabase, disconnectDatabase, userType}