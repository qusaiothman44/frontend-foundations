// Selectors

const CityInput =document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const temp = document.querySelector("h2");
const feels = document.querySelector(".feels");
const dec = document.querySelector(".dec");
const icon = document.querySelector(".icon");
const humidity = document.querySelector(".humidity");
const cityName = document.querySelector("h4");
const forecast = document.querySelector(".forecast");
const loader = document.querySelector(".loader");
const divError = document.querySelector(".error");

//event listener

searchBtn.addEventListener("click",(event)=> {
event.preventDefault();
    getCity(CityInput.value.trim());
});


//functions

async function getCity(city){
loader.style.display="block";
try{
const response1= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c806a9ca3bff328b79c106e60fc35ba&units=metric`);
let data= await response1.json();
if (!response1.ok) {
    throw new Error("City not found");
}
const response2= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6c806a9ca3bff328b79c106e60fc35ba&units=metric`);
let data2= await response2.json();
if (!response2.ok) {
    throw new Error("City not found");
}
console.log(data)
console.log(data2)

cityName.innerHTML=data.name
temp.innerHTML= `${Math.round(data.main.temp)} C`
feels.innerHTML = data.main.feels_like
dec.innerHTML = data.weather[0].description

icon.innerHTML= `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
humidity.innerHTML= data.main.humidity

let result = data2.list.filter(list=>{
    let x =list.dt_txt.split(" ");
    return x[1] === "12:00:00"
})

forecast.innerHTML= result.map(d=>{
    const date = new Date(d.dt_txt);

const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"})    
    return `
    <p>${d.main.temp}</p>
    <p>${formattedDate}</p>
    <p>${d.weather[0].description}</p>
`})
divError.textContent=""
}catch(error){
    divError.innerHTML=error.message
}finally{
    loader.style.display="none"
}
}

