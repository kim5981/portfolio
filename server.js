const express = require("express")

const server = express()

const PORT = process.env || 9000

server.get("/", (req, res) => {
    console.log("server is working")
})

server.listen("", () => {
    console.log(`server listening at port ${PORT}`)
})

module.exports = server