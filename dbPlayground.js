const db = require('./models')

db.User.find({ name: 'Bobby'}, (err, response) => {
    console.log(response)
})

// db.User.deleteMany({ name: 'Bobby'}, (err, response) => {
//     console.log(response)
// })


// db.User.create({
//     name: 'Bobby',
//     email: 'Bobby2sheds@hotmail.com',
//     meta: {
//         age: 29,
//         website: 'BVStudios.com'
//     }
// }, (err, newUser)=> {
//     if (err) {
//         console.log(err)
//     }
//     console.log(newUser)
// })

// db.User.updateOne({ name: 'Bobby'}, { meta: {age: 100}}, function(err, user) {
//     if (err) console.log(err);
//     console.log(user)
// })