import React from 'react'
import Search from '../components/Search'
import MovieList from '../components/MovieList'
import axios from 'axios'
import { apiKey } from '../Constant'
import { useLoaderData } from 'react-router-dom'

export async function loader(args) {
    // https://www.omdbapi.com/?apikey=39817c2a&s=
    const url = new URL(args.request.url);

    const searchTerm = url.searchParams.get('search') || 'marvel';
    // console.log(searchTerm)
    try {
        const movieSearchEndpoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
        const response = await axios.get(movieSearchEndpoint);
        return {
            movieApiResponse: response.data,
            searchTerm,
            isError: false,
            error: ''
        };
    } catch (error) {
        const errorMessage = error?.response?.data?.Error || error.message || 'something went wrong';
        return {
            movieApiResponse: null,
            searchTerm,
            isError: true,
            error: errorMessage
        };
    }
}
function Home() {
    const data = useLoaderData();
    return (
        <div>
            <Search searchTerm={data.searchTerm} />
            <MovieList data={data} />

        </div>
    )
}

export default Home