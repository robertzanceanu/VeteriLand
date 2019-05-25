var express = require('express');
const http = require('http');
process.env.ORA_SDTZ = 'UTC';
var oracledb = require('oracledb');
const app = express();
const port = 3000;

const indexRoute = require('./routes/indexRoute');
const loginRoute = require('./routes/loginRoute');
const signUpDoctorRoute = require('./routes/signUpDoctorRoute');
const signUpUserRoute = require('./routes/signUpUserRoute');
const doctorRoute = require('./routes/doctorRoute');
const path = require('path');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 

async function run()  {
    try {
        connection = await oracledb.getConnection(  {
            user          : "student",
            password      : "STUDENT",
            connectString : "localhost:1521/xe"
          });
          console.log("Connected");
        }
    catch(err) {
        console.log(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch(err) {
          console.log("Error when closing the database connection: ", err);
        }
      }
  }
  }
run();

app.use(express.static(path.join(__dirname, '/view')));
app.use('/',indexRoute);
app.use('/login',loginRoute);
app.use('/signUpDoctor',signUpDoctorRoute);
app.use('/signUpUser',signUpUserRoute);
app.use('/doctor',doctorRoute);

app.listen(port,function(){
    console.log("Server is running on port "+port);
})