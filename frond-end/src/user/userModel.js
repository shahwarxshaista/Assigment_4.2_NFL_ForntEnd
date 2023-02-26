var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
   Player_Name: {
        type: String,
        required: true
    },
    Team: {
        type: String,
        required: true
    },
    Rushing_Yards: {
        type: String,
        required: true
    },
    Touchdowns_thrown: {
        type: String,
        required: true
    },
    Sacks: {
        type: String,
        required: true
    },
    Field_goal: {
        type: String,
        required: true
    },
    Catches: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('nfl', userSchema);