// IMP NOTE : Do not try to run both react and this server from single folder. Use different folders for server and client -YKC //

let myexpress = require('express')

let app = myexpress();

const port = 3001;

const mymongodb = require('mongodb');

const myMongoClient = mymongodb.MongoClient

const location = "mongodb://127.0.0.1:27017"

var myDatabase

myMongoClient.connect(location, (err, server) => {
    if (err) {
        return console.log("MongoDB server connection is Unsuccesful")
    }
    console.log("MongoDB server Connection Successful")
    myDatabase = server.db("ECOM").collection("ITEMDATA")
    // console.log(myDatabase)
})

app.use(myexpress.json())

app.get("/api/getSingleItem", (req, res) => {            // getting a single item for editing
    // console.log(req.query.id)rs
    myDatabase.findOne({ name: req.query.id }, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

app.get("/api/getItems", (req, res) => {                   // getting all items
    myDatabase.find({}).toArray(function (err, result) {
        if (err) throw err;
        // console.log(result);
        res.send(result)
    });
})

app.post("/api/addItems", (req, res) => {
    myDatabase.insertOne(req.body, (err) => {             // inserting single data
        if (err) {
            return console.log("Data indsertion failed")
        }
        console.log("Data Inserted Succesfully")
        res.send("Data Inserted Succesfully")
    })
})

app.use(myexpress.urlencoded({ extended: true }))

app.delete("/api/deleteItem", (req, res) => {                        // deleting single item by name
    const itemName = req.query.name
    myDatabase.deleteOne({ name: itemName }, function (err, obj) {
        if (err) throw err;
        console.log(obj)
        console.log("1 document deleted");
        res.send({ operation: "true" })
    });
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server running at port", port)
})