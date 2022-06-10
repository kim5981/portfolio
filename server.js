const express = require("express")

const server = express()

server.get("/", (req, res) => {
    console.log("server is working")
})

module.exports = server