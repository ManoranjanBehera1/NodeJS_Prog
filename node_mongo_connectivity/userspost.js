const express = require("express")
const app = express()

const MongoClient = require("mongodb").MongoClient
app.use(express.json())
let connection
async function connectMongoDb(){
    try {
        MongoClient.connect("mongodb://localhost:27017")
        console.log("connection esta...")
    } catch (c){
        console.log(c)
    }
}

app.get('/',(req,res) => {
    res.send("Home")
})
app.post('/users', (req,res) =>{
const body = req.body
console.log(body)
connection.db("july2023").connection("users").insertone(body)
res.send("employee inserted successfully")
})


app.listen(5000,()=>{
console.log("server started")
connectMongoDb()
})