* Global Variables */

// Create a new date instance dynamically with JS

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Egypt&APPID=';
let apiKey = '8fa5cba86bf27e754b482bcbe05b4431';
var zipCode = document.getElementById('zip').value;
//var feelings = document.getElementById('feelings').value;
document.getElementById('generate').addEventListener('click',performAction);
function performAction(e){
  const newZip = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;
 
  console.log("STEP #1");
  getWeatherDemo(baseURL,zipCode,apiKey)
  .then(function(data){
    console.log("STEP #2");
    postData('/addProject',{date:newDate,temp:data.main.temp,content,newZip}); 
  })
 
    //console.log(updateUI)
  
};
    //postData('/addProject',y ,x); 
    



const getWeatherDemo = async (baseURL,zipCode,apiKey) =>{
  //1.
  const res = await fetch(baseURL+zipCode+apiKey)
  //const req = await fetch ('/fakeProject')
  try {
    const data = await res.json();
    return data;
   // var x = document.getElementById('feelings').value;
    //var y = document.getElementById('zip').value;
    //var z = {x,y};
    //postData('/addProject',x,y);
  } catch(error) {
    console.log("error",error);
  }  
};

/* Post Example */ 
const postData = async ( url="",data={})=>{
    const response = await fetch(url,{
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
   body: JSON.stringify({
     date:data.date,
     temp: data.temp,
     content:data.content,
     newZip:data.newZip
   }) 
  })
  console.log("dsadsasa");
  console.log(response);
  updateUI();
  
};


// update UI

const updateUI = async () => {
  console.log("asdsadsdsa")

  const json = await fetch('/all')
  .then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    
    console.log('STEP #1');
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log('STEP #2');
    
    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    const arrayOfObj = Object.entries(data).map((e) => ( { [e[0]]: e[1] } ));
    
    for (obj in arrayOfObj) {
      let dict = obj
      for(key in dict) {
        if(data.hasOwnProperty(key)) {
            var value = data[key];
            document.getElementById('date').innerHTML = value.date;
            document.getElementById('temp').innerHTML = value.temp;
            document.getElementById('content').innerHTML.value = value.content;
            document.getElementById('newZip').innerHTML.value = value.newZip;
            console.log(value.date);
        }
    }
    
  }
    
    
  
  });

    

}

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
