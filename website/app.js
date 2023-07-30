/* Global Variables */
const Button = document.getElementById("generate");
const apiKey = "16b6f5bb0a0befa46b8e11ec64e8cac0&units=imperial";


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ (d.getMonth()+1)+'.'+ d.getFullYear();


//  add Event when click on button
const generate =()=>{
    const zip = document.querySelector("#zip").value;
    const feel = document.querySelector("#feelings").value;
    const link = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`;
    const fetchapi = callData(link);
    fetchapi.then((data)=>{
        const opjdata={
            temp:data.main.temp,
            feel:feel,
            date:newDate
        }
        sendDat('/add',opjdata);
    }
).then(()=>
    retrieveData())

}

const callData =async (url)=>{
    const res =await fetch(url);
    try{
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

const sendDat = async (route,finalDat)=>{
    const res = await fetch(route,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(finalDat),
    })
}
const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
      console.log("error", error); 
      // appropriately handle the error
    }
   }

Button.addEventListener("click",generate);