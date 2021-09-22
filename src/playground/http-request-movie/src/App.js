import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  // const getMoviesHandler = useCallback(() => {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((baseFilms) => {
  //       const transformedMovies = baseFilms.results.map((film) => {
  //         return {
  //           id: (Math.random() * 0.3).toString(),
  //           title: film.title,
  //           openingText: film.openingText,
  //           releaseDate: film.releaseDate,
  //         };
  //       });
  //       setFilms(transformedMovies);
  //     });
  // }, []);

  const getMoviesHandler = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) setError(true);
      const dataMovies = await response.json();
      const transformedMovies = dataMovies.results.map((film) => {
        return {
          id: (Math.random() * 0.3).toString(),
          title: film.title,
          openingText: film.openingText,
          releaseDate: film.releaseDate,
        };
      });
      setFilms(transformedMovies);
    } catch (error) {
      console.log("⭐", error.message);
      setError(error.message);
    }
    setLoading(false);
  }, [setFilms]);

  useEffect(() => {
    // getMoviesHandler();
    console.log(films);
    console.log(loading);
  }, [films, getMoviesHandler, loading]);
  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && films.length >= 0 && <MoviesList movies={films} />}
        {!loading && films.length === 0 && !error && "No movies"}
        {loading && !error && "Loading"}
        {!loading && error && <div style={{ color: "red" }}>{error}</div>}
      </section>
    </React.Fragment>
  );
}

export default App;
