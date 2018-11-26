const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
 });
 
 var User = mongoose.model('User', userSchema);
 
 /* const newUser = new User({
     email: '   new@mail.com  '
 });
 
 newUser.save().then((doc) => {
    console.log('Saved user ', doc);
 },
 (e) => {
    console.log('Unable to save user', e);
 }); */

 module.exports = {User};