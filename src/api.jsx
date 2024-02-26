import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
    const movie = await axios.get (`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    // console.log({movieList: movie})
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}

export const getTopRated = async () => {
    const top = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
    return top.data.results
}

export const getUpComing = async () => {
    const getUp = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    return getUp.data.results
}

export const getNowPlaying = async () => {
    const getNow = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`)
    return getNow.data.results
}