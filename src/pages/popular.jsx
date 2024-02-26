import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { getMovieList } from "../api";
import { FaStar } from 'react-icons/fa';

const Popular = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMouseEnter = (movieId) => {
        setSelectedMovie(movieId);
    }

    const handleMouseLeave = () => {
        setSelectedMovie(null);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const moviesData = await getMovieList();
                setPopularMovies(moviesData)
            } catch (error) {
                console.error('Error fetching', error)
            }
        };

        fetchData();

    }, [])

    console.log(popularMovies)



    return (
        <>
            <Navbar setSearch={setPopularMovies} />
            <h1 className="bg-gray-900 text-white flex justify-center py-4 underline font-semibold text-xl cursor-pointer">Popular</h1>
            <div className="bg-gray-900 justify-center flex flex-wrap gap-8 gap-y-6 p-4">
                {popularMovies.map((movie, i) => (
                    <div key={i} onMouseEnter={() => handleMouseEnter(movie.id)} onMouseLeave={handleMouseLeave}>
                        <div className="bg-red-400 relative">
                            <div className="xl:w-72 xl:h-96 lg:w-64 lg:h-80 md:w-60 md:h-72 sm:w-56 sm:h-64">
                                <img src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`} alt="" className="w-full h-full object-cover" />
                            </div>
                            {selectedMovie === movie.id && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white">
                                    <div className="text-center">
                                        <h2 className="text-xl font-bold">{movie.title}</h2>
                                        <p className="lg:text-sm md:text-xs sm:text-xs">{movie.overview}</p>
                                    </div>
                                </div>
                            )}
                            <div className="backdrop-blur bg-gray-800 bg-opacity-5 w-auto absolute bottom-0 right-0 rounded-l-lg flex p-1">
                                <div className="font-semibold text-white text-center flex items-center gap-1">
                                    <FaStar className="text-yellow-400" size="" />
                                    {movie.vote_average}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 rounded-b-2xl bg-white text-center">
                            <div className="font-bold">{movie.title.length > 20 ? movie.title.substring(0, 20) + "..." : movie.title}</div>
                            <div className="text-gray-500">{movie.release_date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Popular;