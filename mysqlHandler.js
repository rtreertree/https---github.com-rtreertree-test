const config = require('./config.json');
const mysql = require('mysql');

var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password
});

module.exports = {
    get_all: () => {
        con.connect(err => {
            if (err) throw err;
            console.log("Connected!");
        });
    },
}