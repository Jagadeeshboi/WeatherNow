import { useEffect, useState } from "react"

export const LocationApi=(lat,lng)=>
{
    const [Location,SetLocation]=useState("");
    useEffect(()=>
    {
     const FetchL=async ()=>
     {
        const req=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=19f176a81418c65fce60e46459832ff6`) 
        const data=await req.json();
        SetLocation(data.name);
     }
     FetchL();   
    },[lat,lng])
    

    return Location;
}