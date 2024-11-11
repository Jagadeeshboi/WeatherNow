import { useState, useEffect } from 'react';
import { format } from 'date-fns-tz';
import { LocationApi } from './LocationApi';
import TimeData from './TimeData';

const Location = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationName=LocationApi(latitude, longitude);
          setLocation(locationName);
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      setLocation("Geolocation is not available in this browser.");
    }
  }, []);
  console.log(location);
  return location;
};

export default Location;

export const Sunrise=(time,TimeZone)=>
{
    const {lat,lon}=TimeZone;
    const DateTime=TimeData(lat,lon);
    console.log(DateTime.timeZone);
    const date = new Date(time * 1000); 
    const formattedTime = format(date, 'yyyy-MM-dd HH:mm:ss', { timeZone: `${DateTime?.timeZone}` });
    return formattedTime;
}