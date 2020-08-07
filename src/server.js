//SERVIDOR
//importar express
const express = require('express')
//inicializar o servidor
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

//importar nunjucks
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//use - configuracao do servidor
//receber dados no body
.use(express.urlencoded({extended: true}))
//configurar arquivos estaticos (css, scripts, images)
.use(express.static("public"))

//rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//ouve porta 5500
.listen(5500)

