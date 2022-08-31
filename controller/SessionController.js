class SessionController {
    logar(res, req){
        let user = {
            email: "mauri@gmail.com",
            senha: "123"
        }

        const {email, senha} = req.body;

        console.log(email, senha);

        if(!(email === user.email)){
            return res.render('pages/login');
        }

        req.session.logado = true;
        return res.redirect('/index');
    }
}

module.exports = new SessionController();