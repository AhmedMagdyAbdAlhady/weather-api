// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ("express");
const app = express();
// Start up an instance of app

/* Middleware*/
const cors = require("cors");
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Setup Server
const server = app.listen(port , listening);
function listening(){
    console.log("running server");
    console.log (`localhost:${port}`)
}

//post data to server
const postData = (req,res)=>{
    projectData =req.body;
    res.send(projectData);
    console.log(projectData);
}
app.post('/add',postData );

// get data from server
const GetData = (req,res)=>{
    res.send(projectData);
}
app.get('/all',GetData);