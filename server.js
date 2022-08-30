const express = require('express')
const app = express()
const mailing = require('./lib/mail')
const ejs = require('ejs')

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const {
        email
    } = req.body

    const messageSent = mailing(email)

    if (messageSent) {
        res.send('OK')
    }
})

app.listen(PORT, console.log(PORT))