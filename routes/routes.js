const { Router } = require("express");
const Session = require("../controller/SessionController");
const routes = Router();

routes.get("/", (req, res) => {
    res.render("pages/index");
})

routes.get("/login", (req, res) => {
    res.render("pages/login");
})

routes.post("/logar", (req, res) =>{
    Session.logar;
});

module.exports = routes;