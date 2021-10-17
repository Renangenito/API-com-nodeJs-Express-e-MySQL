const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')


conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado com sucesso')

       
    }
})


const app = customExpress()

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
//O listen serve para escutar, assim que chamar a porta 3000, faça alguma coisa






//Responsável por subir o nosso servidor no ar


