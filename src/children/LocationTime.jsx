import React from 'react'
import TimeData from '../utils/TimeData';
import FormateDate from '../utils/FormateDate';

const LocationTime = ({locationName,coordinates}) => {
  const {lat,lon}=coordinates;
  const DateTime=TimeData(lat,lon);

  return (
    <div className='text-center'>
      {DateTime?
      <>
      <h1 className='my-11 font-bold text-2xl'>{locationName}</h1>
      <h1 className='text-8xl mb-6'>{DateTime?.time}<span className='text-sm'>{Number(DateTime?.time?.split(":")[0])>=12?"PM":"AM"}</span> </h1>
      <p className='text-stone-500'>{FormateDate(DateTime?.date)}</p>
      </>
      :<p>Loading..</p>}
    </div>
  )
}

export default LocationTime
