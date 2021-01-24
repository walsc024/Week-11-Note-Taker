const express = require("express");
const html = require("./Routes/htmlRoutes");
const api = require("./Routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/", api)
app.use("/", html)

app.listen(PORT, () => {
    console.log("Server Running")
})
