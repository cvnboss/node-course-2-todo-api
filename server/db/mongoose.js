var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// const mLabURL = 'mongodb://cvnboss:conga012@ds213053.mlab.com:13053/node-todos';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

module.exports = {mongoose};
