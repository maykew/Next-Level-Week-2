//DADOS
const proffys = [
    {
        name: "Mayke Willans",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "789456",
        bio: "Top demais",
        subject: "Tudo",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220],
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//FUNCIONALIDADES
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjectNumber[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    //receber informacoes
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    //transforma chaves em array, verifica se eh maior que zero
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        //pega a string correspondente ao indice
        data.subject = getSubject(data.subject)

        //adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", {subjects, weekdays})
}

//SERVIDOR
//importar express
const express = require('express')
//inicializar o servidor
const server = express()
//importar nunjucks
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//use - configuracao do servidor
//configurar arquivos estaticos (css, scripts, images)
.use(express.static("public"))

//rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//ouve porta 5500
.listen(5500)

