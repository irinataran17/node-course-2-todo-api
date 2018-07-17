const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/moongose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove

//Todo.findByIDAndRemove

Todo.findByIdAndRemove('5b4b3eb11db622208db155af').then((todo) => {
    console.log(todo);
});