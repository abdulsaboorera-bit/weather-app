const api_key = "e60252330519d01340b5ba7edf4f7774";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


function getTodayName() {
    
    const today = new Date();

    
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

  
    const dayIndex = today.getDay();

    console.log(days[dayIndex]);
    return days[dayIndex];
}



async function check_weather(city) {
    const response = await fetch(api_url +city +`&appid=${api_key}`);
    var data = await response.json();

    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + '<span style="font-size: 0.7em; vertical-align: super;">°C</span>';
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed;
document.querySelector(".day").innerHTML = getTodayName();

}


function search_weather(){

    let text_bar = document.querySelector(".textbar").value;
   check_weather(text_bar);

}











