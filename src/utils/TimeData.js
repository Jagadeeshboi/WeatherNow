import { useEffect, useState } from "react";

const TimeData = (lat,lon) => {
    const [Time,setTime]=useState({});
    
    useEffect(() => {
        const FetchTime=async ()=>
        {
            const req=await fetch(`https://timeapi.io/api/time/current/coordinate?latitude=${lat}&longitude=${lon}`) 
            const data=await req.json();
            setTime(data);
        }
        FetchTime();
    },[lat,lon]);
    
    return Time;
}

export default TimeData
