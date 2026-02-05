const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Node werkt 🎉");
});

app.listen(3000, () => {
    console.log("Server draait op http://localhost:3000");
});
