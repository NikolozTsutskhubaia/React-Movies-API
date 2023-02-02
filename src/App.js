import React, { useState, useEffect } from "react";
import './App.css'
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//3c45c499

const API_URL = "https://omdbapi.com?apikey=3c45c499"


const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies();
    }, [])

    function rame() {
        searchMovies(searchTerm)
    }

    return (
        <div className="app">
            <h1>CUCNEMA</h1>


            <div className="search">
                <input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={rame}
                />
            </div>
            {
                searchTerm !== ''
                    ? (
                        movies?.length > 0
                            ? (
                                <div className="container">
                                    {movies.map((movie) => (
                                        <MovieCard movie={movie} />
                                    ))}
                                </div>
                            )
                            : (
                                <div className="empty">
                                    <h2>No movies were found</h2>
                                </div>
                            )
                    ) : (
                        <p>
                            <h2>Search for a movie</h2>
                        </p>
                    )
            }


        </div>
    )


}

export default App;