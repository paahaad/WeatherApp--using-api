
https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&appid=38533facbd6e620a09f84bd16f666b78

function getTemp(){
    let cityName = document.querySelector("#cityName").value;
    // console.log(cityName)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=38533facbd6e620a09f84bd16f666b78`
    fetch(url)
    .then( function(res){
        return res.json();
    })
    .then( function(res){
        console.log(res)
        displaydata(res)
    })

    .catch(function(err){
        console.log("error: ", err)
    })

}

function displaydata(data){
   let container =  document.querySelector("#container");
   container.innerHTML = ""
   let map = document.getElementById("gmap_canvas");
   let city = document.createElement("p")
   city.innerText = "City Name:"+data.name;

   let cityTemp = document.createElement("p")
   cityTemp.innerText = "Temptaure:" + data.main.temp;

   let cityMinTemp = document.createElement("p")
   cityMinTemp.innerText = "Minimum Temptaure:"+data.main.temp_min;
    
   container.append(city, cityTemp, cityMinTemp)

   map.src = `https://maps.google.com/maps?q=${data.name}t=&z=13&ie=UTF8&iwloc=&output=embed`

}




function getweather(){
    
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        var crd = pos.coords;
    
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=38533facbd6e620a09f84bd16f666b78`
        fetch(url)
            .then( function(res){
                return res.json();
            })
            .then( function(res){
                console.log(res)
                displaydata(res)
            })

            .catch(function(err){
                console.log("error: ", err)
            })
    }
}