import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";
import { baseImgUrl } from "../utils/constants";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorCard from "../components/ActorCard";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits",
    };

    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5 mt-10">
      {!movie ? (
        <Loader />
      ) : (
        <div>
          {/* üst */}
          <section className=" relative h-[40vh]">
            <img
              className="object-cover h-full w-full"
              src={baseImgUrl + movie.backdrop_path}
              alt=""
            />
            <div className="absolute  inset-0 bg-black grid place-items-center bg-opacity-50 ">
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
            </div>
          </section>

          {/* orta */}
          <section className="my-7 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title="Kategoriler" data={movie.genres} />
              <DetailDisplay
                title="Konuşulan Diller"
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title="Yapımcı Şirketler"
                data={movie.production_companies}
              />
              <DetailDisplay
                title="Yapımcı Ülkeler"
                data={movie.production_countries}
              />
            </div>
            <div className="md:mt-10 md:p-4 md:mb-4 ">
              <p className="md:text-2xl ">{movie.overview}</p>
              <p>
                Bütçe :
                <span className="text-green-600 ms-2">
                  {movie.budget === 0
                    ? "Bilinmiyor"
                    : "$" + millify(movie.budget)}
                </span>
              </p>
              <p>
                Hasılat :
                <span className="text-green-600 ms-2">
                  {movie.revenue === 0
                    ? "Bilinmiyor"
                    : "$" + millify(movie.revenue)}
                </span>
              </p>
            </div>
          </section>

          {/* alt */}
          <section>
            <Splide
              options={{
                pagination: false,
                autoWidth: true,
                gap: 10,
              }}
            >
              {movie.credits.cast.map((actor, i) => (
                <SplideSlide key={i}>
                  <ActorCard actor={actor} />
                </SplideSlide>
              ))}
            </Splide>
          </section>
        </div>
      )}
    </div>
  );
};

export default Detail;
