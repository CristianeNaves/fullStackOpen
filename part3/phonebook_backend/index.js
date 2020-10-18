const express = require('express')
const app = express()

const morgan = require('morgan')

const PORT = 3001

app.use(express.json())

morgan.token('body', (req, res) => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

const generateInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))  
}

const generateId = () => {
    let id = undefined
    while (!id) {
        randomNum = generateInt(999999)
        if (!persons.find(person => person.id === randomNum))
            id = randomNum
    }
    return randomNum
}

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    } 
    if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    } 

    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error: `Name ${body.name} already exists.`
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    res.json(person)

})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person)
        res.json(person)
    else
        res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} persons</p>
            <p>${new Date()}</p>`)
})


app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})