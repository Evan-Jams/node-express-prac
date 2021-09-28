import express from 'express'
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/', (req, res) => {
    res.send('posted')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})