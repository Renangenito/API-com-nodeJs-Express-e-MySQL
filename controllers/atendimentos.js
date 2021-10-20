const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e fez o Get'))
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)

    })
    //.send, ou seja, mandar

}


//controlar quais são as rotas, e oque tem que fazer quando acessar qualquer uma dessas rotas
