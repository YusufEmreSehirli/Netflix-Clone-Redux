import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImgUrl } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api
      .get(`/discover/movie?with_genres=${genre.id}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-3 mt-5">{genre.name}</h1>

      <Splide
        options={{
          autoWidth: true,
          gap: "14px",
          pagination: false,
        }}
        aria-label="My Favorite Images"
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] h-full cursor-pointer rounded transition-transform duration-300 ease-in-out hover:scale-105"
                src={baseImgUrl + movie.poster_path}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
