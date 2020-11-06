const express = require('express')
const fact = require("./fact");
const app = express()
const port = 3000

app.get('/fact', (req, res) => {
    const n = req.query.n;
    res.send(fact(n).toString())
})

app.listen(port, () => {


    console.log(`Example app listening at http://localhost:${port}`)
})




