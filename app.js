const express = require ("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({data: "Hola a todos con GET"});
});

app.listen(4000);