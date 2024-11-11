import {  GiSunrise,GiSunset } from "react-icons/gi";
import { MdAcUnit,  MdWbSunny } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { IoSpeedometer, IoSunnySharp } from "react-icons/io5";
import { BiWind } from "react-icons/bi";
import { Sunrise } from "../utils/location";
import { FaCloudSun, FaSnowflake, FaSun } from "react-icons/fa6";

const TodayReport = ({Temp,feelsLike,sunrise,sunset,TimeZone,Humdity,Windspeed,pressure,uv}) => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className="flex flex-col gap-9">
                <div>
                    <h1 className='text-5xl font-semibold'>{Math.round(Temp,0)}℃</h1>
                    <h1 className='text-xl'><span className='text-stone-600 text-sm'>Feels Like:-</span>{Math.round(feelsLike,0)}℃</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-5xl"><GiSunrise className="fill-orange-500"/></span>
                    <ul>
                        <li className="capitalize font-semibold">sunnrise</li>
                        <li>{Sunrise(sunrise,TimeZone).split(" ")[1].split(":").slice(0,2).join(":")} AM</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-5xl"><GiSunset className="fill-orange-500"/></span>
                    <ul>
                        <li className="capitalize font-semibold">sunnrise</li>
                        <li>{Sunrise(sunset,TimeZone).split(" ")[1].split(":").slice(0,2).join(":")} PM</li>
                    </ul>
                </div>
            </div>  
            <div>
                <div className="flex flex-col justify-center gap-9 h-full items-center">
                {
                            Math.round(Temp) < 10 ? <FaSnowflake className="text-9xl fill-blue-400"/> : 
                            Math.round(Temp) >= 10 && Math.round(Temp) < 16 ? <MdAcUnit className="text-9xl fill-white"/> :
                            Math.round(Temp) >= 16 && Math.round(Temp) < 21 ? <MdWbSunny className="text-9xl fill-yellow-300"/> :
                            Math.round(Temp) >= 21 && Math.round(Temp) < 26 ? <FaCloudSun className="text-9xl from-yellow-300"/> :
                            Math.round(Temp) >= 26 && Math.round(Temp) < 31 ? <FaSun className="text-9xl fill-yellow-300"/> :
                            Math.round(Temp) >= 31 ? <IoSunnySharp  className="text-9xl fill-yellow-400" /> : null
                }
                </div>
            </div>  
            <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-1 h-full">
                        <WiHumidity className="text-5xl"/>
                        <h1 className="text-lg">{Humdity} %</h1>
                        <p>Humidity</p>
                    </div>
                    <div>
                        <IoSpeedometer className="text-5xl"/>
                        <h1 className="text-lg">{Math.round(pressure,0)}hpa</h1>
                        <p>pressure</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <BiWind className="text-5xl"/>
                        <h1 className="text-lg">{Math.round(Windspeed)} Km/h</h1>
                        <p>Wind Speed</p>
                    </div>
                    <div>
                        {/* <TbUvIndex className="text-5xl"/>
                        <h1 className="text-lg">Temp</h1>
                        <p>Humidity</p> */}
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default TodayReport
