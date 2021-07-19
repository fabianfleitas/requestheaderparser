const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")

app.use(cors({ optionsSuccessStatus: 200 }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(port, () => {
    console.log("App listening at http://localhost/" + port)
})

app.get('/api/whoami', (req, res) => {
    res.json({
        "ipaddress": req.socket.remoteAddress,
        "language": req.headers["accept-language"],
        "software": req.headers["user-agent"]
    })

})