var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    id : { type: String, required: true, unique: true },
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);