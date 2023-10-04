let rootElement=document.getElementById("root");
let search=document.getElementById("search");
let searchBtn=document.querySelector("header>button")
let gmap_canvas=document.getElementById("gmap_canvas")

let api=`51871810927d78bf7e5e93d436cec2cc`


searchBtn.onclick=()=>{
    gmap_canvas.setAttribute("src",`https://maps.google.com/maps?q=${search.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`)

    rootElement.innerHTML=''
    rootElement.innerHTML=`<h1>Weather Report</h1>`;
    getData();
    getData2();

}

console.log(search.value)

async function getData(){
    try {
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=51871810927d78bf7e5e93d436cec2cc`);
        let data=await res.json();
        print(data);
    } catch (error) {
        console.log(error)
        rootElement.innerText="Data could'nt fetch"
    }
}

function print(data){
    let city=document.createElement("h1")
    city.textContent=`${data.name},${data.sys.country}`;
    let temp=document.createElement('span')
    temp.textContent=`${parseInt(data.main.temp-273.15)} °C`
    temp.className='large display-inline';
    city.className='large';
    

    let maxTemp=document.createElement("h2")
    maxTemp.textContent="Max"+parseInt(data.main.temp_max-273.15)+" °C"


    let minTemp=document.createElement("h2")
    minTemp.textContent="Min"+parseInt(data.main.temp_max-273.15)+" °C"



    let feelLike=document.createElement("h3")
    feelLike.textContent=`Feels like ${Math.floor(parseInt(data.main.feels_like)-273.15)} °C `

    let img=document.createElement("img")
    img.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    img.className="display-inline"
    



    rootElement.append(city,img,temp,maxTemp,minTemp,feelLike)
    
    

    
     let section=document.createElement("section")

     let humidity=document.createElement("p");
    humidity.textContent=`Humidity ${data.main.humidity}`

    let  pressure=document.createElement("p")
    pressure.innerHTML=`<b>Pressure</b> ${data.main.pressure}`; 

    let  seaLevel=document.createElement("p")
    seaLevel.innerHTML=`<b>Sea Level</b> ${data.main.sea_level}`;

    let  grndLevel=document.createElement("p")
    grndLevel.innerHTML=`<b>Ground Level</b> ${data.main.grnd_level}`;

    let  windSpeed=document.createElement("p")
    windSpeed.innerHTML=`<b>wind Speed</b> ${data.wind.speed}`;

    let  deg=document.createElement("p")
    deg.innerHTML=`<b>Degree</b> ${data.wind.deg}`;

    section.append(pressure,seaLevel,grndLevel,windSpeed,deg)

    rootElement.append(section)


    
}

async function getData2(){
    try {
        let res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&appid=51871810927d78bf7e5e93d436cec2cc`);
        let data=await res.json();
        forecast5Days(data)
        
        
    } catch (error) {
        console.log(error)
        
    }

}
function forecast5Days(data){
    let div=document.createElement("div");
    div.className="container-4day"

    let day1=document.createElement("div");
    day1.innerHTML=`
    <h2>${data.list[0].dt_txt}</h2>
    <h1> ${data.list[0].main.temp} °C </h1>
    <h2>Humidity: ${data.list[0].main.humidity}</h2>
    <h2>${data.list[0].weather[0].description} <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"></h2>
    <h2>${data.list[0].main.temp}</h2>`
    

    let day2=document.createElement("div");
    day2.innerHTML=`
    <h2>${data.list[11].dt_txt}</h2>
    <h1> ${data.list[11].main.temp} °C </h1>
    <h2>Humidity: ${data.list[11].main.humidity}</h2>
    <h2>${data.list[11].weather[0].description} <img src="https://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png"></h2>
    <h2>${data.list[11].main.temp}</h2>`
    
    let day3=document.createElement("div");
    day3.innerHTML=`
    <h2>${data.list[26].dt_txt}</h2>
    <h1> ${data.list[26].main.temp} °C </h1>
    <h2>Humidity: ${data.list[26].main.humidity}</h2>
    <h2>${data.list[26].weather[0].description} <img src="https://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png"></h2>
    <h2>${data.list[26].main.temp}</h2>`

    let day4=document.createElement("div");
    day4.innerHTML=`
    <h2>${data.list[34].dt_txt}</h2>
    <h1> ${data.list[34].main.temp} °C </h1>
    <h2>Humidity: ${data.list[34].main.humidity}</h2>
    <h2>${data.list[34].weather[0].description} <img src="https://openweathermap.org/img/wn/${data.list[34].weather[0].icon}@2x.png"></h2>
    <h2>${data.list[34].main.temp}</h2>`

    div.append(day1,day2,day3,day4)
    rootElement.append(div);

    day1.className="card"
    day2.className="card"
    day3.className="card"
    day4.className="card"





}
