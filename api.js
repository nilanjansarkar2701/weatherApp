// const express=require('express');
// const app=express();
const https1=require('https');

function weather()
{
    var loc=$('.search').val();
    const url='https://api.openweathermap.org/data/2.5/weather?q='+loc+'&appid=ba7e0e9b400495f0d0d5f4fd0cab989f&units=metric';
    https1.get(url,function(response)
    {
        response.on('data',function(data)
        {
            const weatherData=JSON.parse(data);
            console.log(weatherData);
        })
    })
    
}