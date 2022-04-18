
let weather ={
    apiKey: "569250e7dabb4a78e67e48cb62fce007",
   
    fetchWeather: function (city,id) {
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid=" 
             + this.apiKey 
            
        )
        
        .then((response) => response.json())
        .then((data)=>this.displayWeather(data,id))
        
        },
        displayWeather: function(data,id){
            const { name } = data;
            const  {icon, description } = data.weather[0];
            const {temp, humidity } = data.main;
            const{speed } = data.wind;
          
            document.getElementById(id).getElementsByClassName("city")[0].innerText = name;
            document.getElementById(id).getElementsByClassName("icon")[0].src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
            document.getElementById(id).getElementsByClassName("description")[0].innerText = description;
            document.getElementById(id).getElementsByClassName("temp")[0].innerText = temp +"°C";
            document.getElementById(id).getElementsByClassName("humidity")[0].innerText = "Humidity: " + humidity + "%";
            document.getElementById(id).getElementsByClassName("wind")[0].innerText = "Wind speed: " + speed + "km/h";
        },
        search: function()
        {
            this.fetchWeather(document.querySelector(".search-bar").value,"1");
        }
    };

    weather.fetchWeather('Tel Aviv', "2");
    weather.fetchWeather('New York', "3");
    weather.fetchWeather('Tokyo', "4");

    document
    .querySelector(".search button").addEventListener("click",function()
    {
        weather.search();
    });
        

