const express = require('express')
const app = express()
const db = require('./models')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('hello leo')
})

app.get('/bobby', (req, res)=> {
    //make a user named bobby
    db.User.create({
        name: 'Bobby',
        email: 'Bobby2sheds@hotmail.com',
        meta: {
            age: 29,
            website: 'BVStudios.com'
        }
    }, (err, newUser)=> {
        if (err) {
            console.log(err)
        }
        console.log(newUser)
        res.send(newUser.name)
    })
})

PORT = 3000

app.listen(PORT, () => console.log('listening on: ' + PORT))