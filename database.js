const mysql = require('mysql12');
const conn =mysql.createConnection({
    host : process.env.db_host,
    user : process.env.db_user,
    password : process.env.db_password,
    database  : process.env.db_name,
});
conn.connect(function(err){
    if(err) throw err;
    console.log('DataBase Successfully connected');
});
module.exports = conn;
