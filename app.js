const express = require('express');
const path = require('path');
const app = express();

/****** enable mysql check*******/
#const conn = require('./database');
#console.log(conn);
/************************/


app.set('views', path.join(path.resolve(), 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(path.resolve(), 'public')));


app.get("/",(req,res)=>{
  console.log('test')
    res.render("test",{count:0});
});
var port = 1040;
app.listen(port);
console.log(`Your running port is :${port}`);
