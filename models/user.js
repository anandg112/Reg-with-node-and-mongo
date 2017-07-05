var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var User = mongoose.model('User', {
  username: {
    type: String,
    minlength: 5,
    require: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 8,
    require: true,
    trim: true
  }
});

module.exports = {User};
