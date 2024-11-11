import { FaCloudSun, FaSnowflake, FaSun } from "react-icons/fa6"
import { IoSunnySharp } from "react-icons/io5"
import {MdAcUnit, MdWbSunny} from "react-icons/md"
const Hourly = ({data}) => {
  return (
    <>
        <h1 className='text-stone-950 text-3xl font-semibold text-center mb-4'>Hourly Forecast:</h1>
            <div className="flex justify-between gap-3 h-4/5">
                {data.slice(0,8).map((day,i)=>
                <div key={i} >
                    <ul className='flex flex-col mb-3 h-full justify-between  items-center shadow-sm p-3 rounded-xl bg-orange-300'>
                        <li>{day?.dt_txt.split(" ")[1].split(":").slice(0,2).join(":")} {Number(day?.dt_txt.split(" ")[1].split(":")[0]) >=12?"PM":"AM"}</li>
                        <li>
                        <p>{
                            Math.round(day?.main?.temp - 273.15) < 10 ? <FaSnowflake className="text-3xl fill-blue-400"/> :
                            Math.round(day?.main?.temp - 273.15) >= 10 && Math.round(day?.main?.temp - 273.15) < 16 ? <MdAcUnit className="text-3xl fill-white"/> :
                            Math.round(day?.main?.temp - 273.15) >= 16 && Math.round(day?.main?.temp - 273.15) < 21 ? <FaCloudSun className="text-3xl from-yellow-300"/> :
                            Math.round(day?.main?.temp - 273.15) >= 21 && Math.round(day?.main?.temp - 273.15) < 26 ? <FaCloudSun className="text-3xl from-yellow-300"/> :
                            Math.round(day?.main?.temp - 273.15) >= 26 && Math.round(day?.main?.temp - 273.15) < 31 ? <FaSun className="text-3xl fill-yellow-300"/> :
                            Math.round(day?.main?.temp - 273.15) >= 31 ? <IoSunnySharp className="text-3xl fill-yellow-300"  /> : null
                        }</p>
                        </li>
                        <li>{Math.round(day?.main?.temp-273.15)}℃</li>
                        <li>{Math.round(day?.wind?.speed)} Km/h</li>
                    </ul>
                </div>)}
            </div>
    </>
  )
}

export default Hourly
