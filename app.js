const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.send("Welcome home babe.");
});

app.listen(3000, () => {
    console.log("App started and listening on port 3000.");
});