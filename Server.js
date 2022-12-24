const express=require('express');
const app=express();
const https=require('https');
app.use(express.static('public'));
app.get('/weather',function(req,res)
{
    
    res.sendFile(__dirname+"/public/index.html");
    // callWeather(req,res);
    
    // weather();
    
    // res.write("hello");
});
// function callWeather(req,res)
// {
//     weather(req,res);
// }

app.listen(3000,function()
{
    console.log("Server running at port: 3000");
});
// function weather()
// {
//     console.log("hello");
//     const url='https://api.openweathermap.org/data/2.5/weather?q=Kharagpur,India&appid=ba7e0e9b400495f0d0d5f4fd0cab989f&units=metric';
//     https.get(url,function(response)
//     {
//     // console.log(response);
//     response.on('data',function(data)
//         {
//             const wdata=JSON.parse(data);
//             console.log(wdata.main.temp);
//         });
//     });
// }
// const url='https://api.openweathermap.org/data/2.5/weather?q=Kharagpur,India&appid=ba7e0e9b400495f0d0d5f4fd0cab989f&units=metric';
// https.get(url,function(response)
// {
//     // console.log(response);
//     response.on('data',function(data)
//     {
//         const wdata=JSON.parse(data);
//         console.log(wdata.main.temp);
//     });
// });
