import React from "react";
import { baseImgUrl } from "../utils/constants";

const ActorCard = ({ actor }) => {
  const url = !actor.profile_path
    ? "public/defaultprofile.jpg"
    : baseImgUrl + actor.profile_path;
  return (
    <div className="w-[160px] line-clamp-1">
      <img
        className="h-[175px] "
        src={baseImgUrl + actor.profile_path}
        alt={actor.original_name}
      />
      <h2>{actor.original_name}</h2>
      <h2 className="line-clamp-1">{actor.character}</h2>
    </div>
  );
};

export default ActorCard;
