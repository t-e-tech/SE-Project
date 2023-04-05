const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
// my sql connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mysql_nodejs',
    port:'8889'
})