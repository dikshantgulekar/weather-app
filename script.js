
var answer = document.querySelector('.result');


document.getElementById('btn').onclick = function(){

    var cityName =  document.getElementById('txt').value;
    console.log(cityName);

    var temp = document.querySelector('.heading');
    var city = document.querySelector('.city');
    var info = document.querySelector('.info');
    city.innerHTML = cityName;

    if (cityName === '') {
        alert('Please enter a city name');
        return;
    }

    var apiKey = '36e1575e4dd4d02d3fee92c6c81679dc';
    var apiPath = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log(apiPath);
    var xmlhttp = new XMLHttpRequest();
    console.log(xmlhttp);
    console.log(typeof xmlhttp);

    // console.log(typeof xmlhttp);

    console.log(xmlhttp.readyState, xmlhttp.status);

    // this event detetct new states
    xmlhttp.onreadystatechange = function(){
        console.log(xmlhttp.readyState , xmlhttp.status);

        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            // console.log('SUCCESS');
            // console.log(typeof xmlhttp.responseText);
            //console.log('thisResponse' + this.responseText);
            console.log('response : ' + xmlhttp.responseText);

            var result = JSON.parse(xmlhttp.responseText);
            console.log('result lon ' + result.coord.lon);
            console.log('result lat ' + result.coord.lat);


            // result && result.length > 0 && result.map(obj=>{
            //     console.log('test data');
            //     console.log('object'+ obj.coord.lon);
                

                answer.innerHTML = `
                <p>lon : ${result.coord.lon} </p>             
                <p>lat : ${result.coord.lat} </p>             
                <p>Humidity : ${result.main.humidity} </p>  
                
                `;

                temp.innerHTML = result.main.temp;
                info.innerHTML = result.cod;


            // })

        }else{
            console.log('failed');
        }
    }

 
    xmlhttp.open('GET', apiPath);
    xmlhttp.send();
}



