const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser=require("cookie-parser");
const port = 3000;
const app = express();
const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_1arfnc",
    password: "GNYK8cVwqUS9Nyuz",
    database: "lab_todo02_1a5rydw"
});

connection.connect(() => {
    console.log('Database is connected');
});

//Export connection to use in other files
global.connection=connection;

app.use(bodyParser.json({type:"application/json"}));
app.use(cookieParser());

app.post("/login", require("./endpoint_login"));
app.post("/register", require("./endpoint_register"));
app.get("/check", require("./endpoint_check_login"));
app.get("/todo/all", require("./endpoint_get_all_todos"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
