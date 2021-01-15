// Setup empty JS object to act as endpoint for all routes
projectData = {

}
// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/*Dependencies*/
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
app.use(express.json({limit:'1mb'}));


// Setup Server
const port = 8000;
const server = app.listen(port,listening);
function listening(){
  console.log('server running');
  console.log(`running on localhost:${port}`);
};
// Get Route
app.get('/fakeProject',getFakeProject)
function getFakeProject(req,res){
  console.log(projectData);
  res.send(projectData);
}
var project = [];
app.get('/all',getData)
function getData(req,res){
  res.send(project);
  console.log(project);
  console.log("getData")
}

// Post Route
app.post('/addProject',addProject);
function addProject(req,res){
  console.log("addProject")
  console.log(req.body);
  const data = req.body;
  newEntry ={
    date: data.date,
    temp:data.temp,
    content: data.content,
    newZip: data.newZip
  }
  project.push(newEntry)
  res.send(project)
  console.log(project)
  
}