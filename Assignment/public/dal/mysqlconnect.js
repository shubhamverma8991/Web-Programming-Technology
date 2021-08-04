var mysql = require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'4321',
    database:'flower'
});

connection.connect(function(err){
    if(err) throw err;

});
module.exports=connection;