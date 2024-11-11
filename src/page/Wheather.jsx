import React, { useState } from 'react'
import Card from '../Components/Card'
import LocationTime from '../children/LocationTime'
import TodayReport from '../children/TodayReport'
// import FiveDays from '../children/FiveDays'
import Hourly from '../children/Hourly'
import { Sunrise, Sunset } from '../utils/location'
import { useWeatherApi } from '../utils/WheatherApi'
import SearchBar from '../children/Searchbar'
// import FiveDaysApi from '../utils/FiveDaysApi'
const Wheather = () => {
    const [search, onSearch] = useState('');
    // const FivedaysForecast=FiveDaysApi(search?search:"chennai");
    const {data}= useWeatherApi(search?search:"chennai")
    const Time=Sunrise(data?.city?.sunrise);
    const SunsetTime=Sunset(data?.city?.sunset);
    console.log(data);
    return (
        <>
        {data ? (
            <>
                <div className='flex justify-around w-[56rem] mx-auto'>
                    <h1 className='text-2x font-bold'>Weather app</h1>
                    <SearchBar onSearch={onSearch}/>
                </div>
                <div className='flex gap-4 w-[56rem] mx-auto mt-6 '>
                    <Card width='w-2/4'>
                    <LocationTime 
                        locationName={data.city.name} 
                        coordinates={data?.city?.coord}
                    />
                    </Card>
                    <Card width='w-full'>
                    <TodayReport 
                        Temp={data?.list[0]?.main?.temp - 273.15} 
                        feelsLike={data?.list[0]?.main?.feels_like - 273.15} 
                        sunrise={Time} 
                        sunset={SunsetTime}
                        Humdity={data?.list[0]?.main?.humidity} 
                        Windspeed={data?.list[0]?.wind?.speed} 
                        pressure={data?.list[0]?.main?.pressure} 
                        uv={"loading"} 
                    />
                    </Card>
                </div>
                <div className=' max-w-[56rem] mx-auto mt-6 '>
                    
                    <Card width='w-full'>
                        <Hourly data={data.list} />
                    </Card>
                </div>
                </>
            ) : (
                <p className='text-5xl mx-auto width-full'>Loading...</p> 
            )}
        </>
    )
}

export default Wheather
