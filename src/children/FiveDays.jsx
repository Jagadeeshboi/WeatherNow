import { FaCloud,  FaSnowflake, FaSun } from "react-icons/fa6";

const FiveDays = (data) => {
    return (
        <>
        <h1 className='text-stone-950 text-3xl font-semibold text-center mb-4'>5 Days Forecast:</h1>
        {data?.data?.slice(0,5)?.map((day,i)=>
        <div key={i}>
            <ul className='flex justify-between mb-3 items-center'>
                <li>
                {day.temp <= 0 ? (
                    <FaSnowflake className='text-blue-400 text-2xl' />
                ) : day.temp <= 10 ? (
                    <FaSnowflake className='text-blue-400 text-2xl' />
                ) : day.temp <= 25 ? (
                    <FaCloud className='text-gray-500 text-2xl' />
                ) : (
                    <FaSun className='text-yellow-400 text-2xl' />
                )}
                </li> 
                <li className='text-lg'>{day?.datetime}</li>
                <li className='text-lg'>{day?.temp}℃</li>
            </ul>
        </div>)
        }
        </>
    )
}

export default FiveDays
