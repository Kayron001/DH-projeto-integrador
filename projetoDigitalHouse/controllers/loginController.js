const LoginController = {
    view: (req, res) => {
        return res.render('../views/login.ejs')
    },
    cadastro: (req, res) => {
        return res.render('../views/loginCadastro.ejs')
    }
}

module.exports = LoginController