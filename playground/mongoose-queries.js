const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/moongose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b4a1420d9ed1a50e0246980';

// if (!ObjectId.isValid(id)) {
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '5b4521616a617a442ac35a9e';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User by ID:', user);
}).catch((e) => console.log(e));
