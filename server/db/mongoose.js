var mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/TodoApp';
const url = 'mongodb://cvnboss:conga012@ds213053.mlab.com:13053/node-todos';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DEV_MONGODB || url, {useNewUrlParser: true});

module.exports = {mongoose};
