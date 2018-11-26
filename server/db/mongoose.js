const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nodetest1:159852mM1@cluster0-shard-00-00-353p6.mongodb.net:27017,cluster0-shard-00-01-353p6.mongodb.net:27017,cluster0-shard-00-02-353p6.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
 { useNewUrlParser: true });

 module.exports = {mongoose};