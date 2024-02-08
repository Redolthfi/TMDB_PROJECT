import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { getMovieList } from "../api";

// useEffect(() => {
//     getMovieList().then((result) => {
//         setPopularMovies(result)
//     })
// },[])

const HomePages = () => {

    const [popularMovies,setPopularMovies] = useState([])


    useEffect(() => {
        const fetchData = async() => {
            try {
                const moviesData = await getMovieList();
                setPopularMovies(moviesData)
            } catch (error){
                console.error('Error fetching', error)
            }
        };
        fetchData();

    },[])

    console.log({ popularMovies})
    return (
        <>
            <Navbar />
            
            <div className="bg-red-400 h-screen justify-center flex flex-wrap gap-4 p-4">
                <div className="bg-orange-600 w-72 h-96">
                    <div className="w-72 h-72 bg-blue-500">
                        <div>image</div>
                        <div className="">rating</div>
                    </div>
                    <div>title</div>
                    <div>tanggal</div>
                </div>
                <div className="bg-orange-600 w-72 h-96">
                    <div className="w-72 h-72 bg-blue-500">
                        <div>image</div>
                        <div className="">rating</div>
                    </div>
                    <div>title</div>
                    <div>tanggal</div>
                    
                </div>
                
            </div>
        </>
    )
}

export default HomePages;