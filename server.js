let myexpress = require('express')

let app = myexpress();

const port = 3001;

app.use(myexpress.json())

app.post("/addItem", (req, res) => {
    res.send(req.body)
})

app.get("/getItems", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Items sent")
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server running at port", port)
})