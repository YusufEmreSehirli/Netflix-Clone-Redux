import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { baseImgUrl } from "../utils/constants";
import { Link } from "react-router-dom";

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movie);

  // 0-19 arası rastgele sayı üretir, üretilen sayı index sırasındaki elemana erişir (filme)
  const i = Math.floor(Math.random() * 20);
  const movie = movies[i];

  return (
    <div className="relative overflow-hidden h-[70vh] md:h-[100vh]">
      {isLoading || !movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          {/* Arka plan fotoğrafı ve karartma */}
          <div className="absolute inset-0 z-0">
            <img
              className="object-cover w-full h-full"
              src={baseImgUrl + movie.backdrop_path}
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Yazılar ve butonlar */}
          <div className="absolute left-8 bottom-20 text-white z-10 md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {movie.title}
            </h1>
            <p className="text-base sm:text-lg mb-6">{movie.overview}</p>
            <p className="text-lg sm:text-xl mb-6">
              <span>IMDB:</span>
              <span className="text-yellow-400 ms-2 font-semibold text-2xl">
                {movie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <Link
                to={`/movie/${movie.id}`}
                className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-base sm:text-lg"
              >
                Filmi İzle
              </Link>
              <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 text-base sm:text-lg">
                Listeye Ekle
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Hero);
