import { getNowPlaying } from "../api"
import { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import { FaStar } from 'react-icons/fa';


const HomePages = () => {
    const [nowPlaying, setNowPlaying] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMouseEnter = (nowsId) => {
        setSelectedMovie(nowsId);
    }

    const handleMouseLeave = () => {
        setSelectedMovie(null);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const now = await getNowPlaying()
                setNowPlaying(now)
            } catch (error) {
                console.log("data eror".error)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <Navbar setSearch={setNowPlaying} />
            <div className="bg-gray-900 justify-center flex flex-wrap gap-8 gap-y-6 p-4 ">
                {nowPlaying.map((nows, i) => (
                    <div key={i} onMouseEnter={() => handleMouseEnter(nows.id)} onMouseLeave={handleMouseLeave}>
                        <div className="bg-red-400 relative " >
                            <div className="xl:w-72 xl:h-96 lg:w-64 lg:h-80 md:w-60 md:h-72 sm:w-56 sm:h-64">
                                <img src={`${process.env.REACT_APP_BASEIMG}/${nows.poster_path}`} alt="" className="w-full h-full object-cover " />
                            </div>
                            {selectedMovie === nows.id && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white">
                                    <div className="text-center">
                                        <h2 className="text-xl font-bold">{nows.title}</h2>
                                        <p className="lg:text-sm md:text-xs sm:text-xs">{nows.overview}</p>
                                    </div>
                                </div>
                            )}
                            <div className="backdrop-blur bg-gray-800 bg-opacity-5 w-auto absolute bottom-0 right-0 rounded-l-lg flex p-1">
                                <div className="font-semibold text-white text-center flex items-center gap-1">
                                    <FaStar className="text-yellow-400" size="" />
                                    {nows.vote_average}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 rounded-b-2xl bg-white text-center " >
                            <div className="font-bold">{nows.title.length > 20 ? nows.title.substring(0, 20) + "..." : nows.title}</div>
                            <div className="text-gray-500">{nows.release_date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePages;