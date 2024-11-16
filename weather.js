let city=document.querySelector('.city');

async function weathers(){
if(city.value=='')
{
document.querySelector('.citysearched').innerHTML='Empty!!!';
document.querySelector('.citysearched').style.color='black';
}
else{
try{
let respond=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=2b1592f3c630d070c8b21ebafb53b5cc`)
let data=await respond.json();
console.log(data);
//1K − 273.15 = -272.1°C
let min_temp=Number(data.main.temp_min)-Number(273.15);
let max_temp=Number(data.main.temp_max)-Number(273.15);
let today_temp=Number(data.main.temp)-Number(273.15);
let feels_like=Number(data.main.feels_like)-Number(273.15);
let wind_speed=Number(data.wind.speed)*3.6;

(document.querySelector('.feelslike').innerHTML)=(feels_like).toFixed(1);
document.querySelector('.humidity').innerHTML=(data.main.humidity).toFixed(1);
(document.querySelector('.mintemp').innerHTML)=(min_temp).toFixed(1);
document.querySelector('.maxtemp').innerHTML=(max_temp).toFixed(1);//weather
document.querySelector('.winds').innerHTML=(wind_speed).toFixed(1);
document.querySelector('.cloudy').innerHTML=data.weather[0].description;
document.querySelector('.ttemp').innerHTML=(today_temp).toFixed(1);
document.querySelector('.citysearched').innerHTML=(city.value).toUpperCase();
}
catch(error)
{
console.log(error);
}
}

}
