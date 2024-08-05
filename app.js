// const API_KEY = "8f83316bb2b3e555bee1d89b9ec22f01";

// function renderWeatherFunction(data){
//      let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C` 
//     document.body.appendChild(newPara);
// }

// async function fetchWeatherDetails(){
//    try{
//     let city = "goa";

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//     const data = await response.json();
//     console.log("Weather data : ->" , data);

//     renderWeatherFunction(data);
//    }
//    catch(err){
//         console.log(err);
//    }
// }

// fetchWeatherDetails();
 
const API_KEY = "8f83316bb2b3e555bee1d89b9ec22f01";
const city = document.getElementById("input");
const Weathericon = document.querySelector(".weather-icon");

const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function CheckWeather(city) {
     const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

     if(response.status === 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
     }
    else{
     var data = await response.json();
     console.log(data);
     
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

     if(data.weather[0].main === "Clouds"){
          Weathericon.src = "images/clouds.png";
     }
     else if(data.weather[0].main === "Clear"){
          Weathericon.src = "images/clear.png";
     }
     else if(data.weather[0].main === "Rain"){
          Weathericon.src = "images/rain.png";
     }
     else if(data.weather[0].main === "Clouds"){
          Weathericon.src = "images/clouds.png";
     }
     else if(data.weather[0].main === "Drizzle"){
          Weathericon.src = "images/drizzle.png";
     }
     else if(data.weather[0].main === "Mist"){
          Weathericon.src = "images/mist.png";
     }
     
     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
    }
}

const button = document.getElementById("btn");
button.addEventListener("click",()=>{
     CheckWeather(city.value);
})
