const Database = require('./db')
const crateProffy = require('./createProffy')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Mayke Willans",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "789456",
        bio: "Top demais",
    }

    classValue = {
        subject: "Tudo",
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }
    ]

    await createProffy (db, {proffyValue, classValue, classScheduleValues})

    //consultar dados
})