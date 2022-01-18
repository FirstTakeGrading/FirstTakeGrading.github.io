function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "noah2list@gmail.com",
        Password: "firebirds2",
        To: 'noah@noahlist.com',
        From: "First Take",
        Subject: "Welcome to First Take!",
        Body: "Hello, welcome to First Take Grading. We will reach out to you soon!",
    }).then(function (message) {
        alert("Successfully added to mailing list!")
        });
}


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});