//Imports required to create index paths
import express from "express";
import cors from 'cors'
import routes from "./routes/routes.js"

//Config express, cors and paths
const app = express()
app.use(cors())
app.use(express.json())

//Authenticate database
try {
    await mysqlDB.authenticate()
    console.log('Mysql DB is connected successfully')
} catch (err) {
    console.log(`Connection error with message ${err.message}`)
}

app.use('/', routes);

//Listen to know if server is running
app.listen(3377, () => {
    console.log(`Server is running`)
})