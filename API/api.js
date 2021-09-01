const http = require("http");
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mysql = require('mysql');
const bodyParser = require('body-parser');


const connection = mysql.createConnection({
  port: 8889,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'spotify'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } 
  console.log('Tu es connecté..')
})

app.use(bodyParser.json());       // JSON-encoded
app.use(bodyParser.urlencoded({     // URL-encoded
  extended: true
}));

// ROUTES (rest api)

app.get('/artists', (req, res) => {
    // console.log(req);
    connection.query('select * from artists', (error, results) => {
       if (error) {
         console.log(error);
       }
       res.end(JSON.stringify(results));
     });
});

app.get('/artists/:id', (req, res) => {
  // [req.params.id],
  connection.query('select * from artists where id=?', (error, results) => {
     if (error) {
       console.log("probleme2");
     }
     res.end(JSON.stringify(results));
   });
  console.log(req);
});

// PORT (5000)

app.listen(5000, () => {
    console.log(`Server is running on PORT 5000`);
});
