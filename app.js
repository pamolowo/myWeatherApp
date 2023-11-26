const weatherApi = {
    key: '56b1b8b2052cc833db072aca7caa06c3',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
  }
  
  //anonymous function
  //adding event listener key press of enter
  let searchInputBox = document.getElementById('input-box');
  searchInputBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      getWeatherReport(searchInputBox.value);
    }
  })
  
  
  //get weather report
  
  function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)  // fetch method fetching the data from  base url ...metric is used for unit in celcius......here i am appending the base url to get data by city name .  
        .then(weather => {   //weather is from api
            return weather.json(); // return data from api in JSON
        }).then(showWeaterReport);  // calling showweatherreport function
  
  }
  
  //show weather report
  
  function showWeaterReport(weather) {
    let city_code=weather.code;
    if(city_code==='400'){ 
        swal("Empty Input", "Please enter any city", "error");
        reset();
    }else if(city_code==='404'){
        swal("Bad Input", "entered city didn't matched", "warning");
        reset();
    }
    else{
  
    // console.log(weather.cod);
    // console.log(weather);  
    let op = document.getElementById('weather-body');
    op.style.display = 'block';
    let todayDate = new Date();
    let parent=document.getElementById('parent');
    let weather_body = document.getElementById('weather-body');
    weather_body.innerHTML =
        `
    <div class="location-deatils">
        <div class="city" id="city">${weather.name}, ${weather.sys.country}</div>
        <div class="date" id="date"> ${dateManage(todayDate)}</div>
    </div>
    <div class="weather-status">
        <div class="temp" id="temp">${Math.round(weather.main.temp)}&deg;C </div>
        <div class="weather" id="weather"> ${weather.weather[0].main} <i class="${getIconClass(weather.weather[0].main)}"></i>  </div>
        <div class="min-max" id="min-max">${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max) </div>
        <div id="updated_on">Updated as of ${getTime(todayDate)}</div>
    </div>
    <hr>
    <div class="day-details">
        <div class="basic">Feels like ${weather.main.feels_like}&deg;C | Humidity ${weather.main.humidity}%  <br> Pressure ${weather.main.pressure} mb | Wind ${weather.wind.speed} KMPH</div>
    </div>
    `;
    parent.append(weather_body);
    changeBg(weather.weather[0].main);
    reset();
    }
  }








// const form = document.querySelector("#form_search");
// const input = document.querySelector("#search-term");
// const msg = document.querySelector(".form-err-msg");
// const list = document.querySelector(".cities");


// const apiKey = "d9c877a16e54d5b2e6758b72d1668057";


// form.addEventListener("submit", e =>{
//     e.preventDefault()

//     // msg.textContent = ""
//     // msg.classList.remove('visible')

//     let inputVal = input.value

//     const listItemsArray = Array.from(list.querySelectorAll('.cities li'))

//     if(listItemsArray.length > 0){
//         const filteredArray = listItemsArray.filter(element =>{
//             let content = ''
//             let cityName = element.querySelector('.city-name').textContent.toLowerCase()
//             let cityCountry = element.querySelector('.city-country').textContent.toLowerCase()


//             if (inputVal.includes(',')){
//                 if(inputVal.split(',')[1].length > 2){
//                     inputVal = input.split(',')[0]
    
//                     content = cityName
//                 }else{
//                     content = `${cityName}, ${cityCountry}`
//                 }
//             }else{
//                 content = cityName
//             }
//             return content = inputVal.toLowerCase()
//         })

//     //  console.log(filteredArray);
//     if (filteredArray.length > 0){
//         msg.textContent = `Do you want to know more about the city
//         ${filteredArray[0].querySelector(".city-name").textContent}
//         click more below`;
//         msg.classList.add('visible')

//         form.reset()
//         input.focus()

//         return
//     }
//     }
// const url = `https://api.openwathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`

// })