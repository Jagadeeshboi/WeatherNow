import { useEffect, useState } from "react";

const FiveDaysApi=(city)=>
{
    const [fiveDays, setFiveDays] = useState([]);

    useEffect(()=>
    {
        const Fetch=async()=>
        {
            const data=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=0aaa747fc37b4d379ef1ec36e98fd5fa`);
            const result=await data.json();
            setFiveDays(result.data);
        };
        Fetch();

    },[city]);
    return fiveDays;
}
export default  FiveDaysApi;