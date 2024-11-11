import { useState, useEffect } from 'react';
import { format } from 'date-fns-tz';
import { LocationApi } from './LocationApi';

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

export const Sunrise=(time)=>
{
    const unixTimestamp = 1731112489;
    const date = new Date(unixTimestamp * 1000); 
    const formattedTime = format(date, 'yyyy-MM-dd HH:mm:ss', { timeZone: 'Asia/Kolkata' });

    return formattedTime;
}
export const Sunset=(time)=>
{
    const unixTimestamp = 1731112489;
    const date = new Date(unixTimestamp * 1000); 
    const formattedTime = format(date, 'yyyy-MM-dd HH:mm:ss', { timeZone: 'Asia/Kolkata' });

    return formattedTime;
}