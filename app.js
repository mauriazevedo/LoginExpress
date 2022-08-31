const express = require("express");
const session = require("express-session");
const app = express();
const port = 3333;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const routes = require("./routes/routes");
app.use(routes);

app.use(session({
    secret: "poohaiukjaahj",
    resave: false,
    saveUninitialized: true
}));

app.listen(port, () => {
    console.log(`Servidor rodando na url http://localhost:${port}`);
})