const mongoose = require('mongoose');

const restaurantschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    role:String
})

mongoose.model('restaurants',restaurantschema);
module.exports = mongoose.model('restaurants')