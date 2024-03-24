"use client";
import { Cast, CastAPI } from "@/utils/types";
import React, { FC, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CastProps {
  cast: Cast[];
}
const Cast: FC<CastProps> = ({ cast }) => {
  const [castIdx, setCastIdx] = useState([0, 6]);

  const handleLeftCastChange = () => {
    let newCastStart = Math.max(castIdx[0] - 6, 0);
    let newCastEnd = newCastStart + 6;
    setCastIdx([newCastStart, newCastEnd]);
  };

  const handleRightCastChange = () => {
    const len = cast.length;
    let newCastEnd = Math.min(len, castIdx[1] + 6);
    let newCastStart = newCastEnd - 6;
    setCastIdx([newCastStart, newCastEnd]);
  };

  return (
    <div className="px-10 py-7 bg-black-04 rounded-lg border border-black-08">
      <div className="flex justify-between mb-3">
        <h2 className="text-gray-300 font-bold text-xl">Cast</h2>
        <div className="rounded-lg px-4 py-2 bg-black-01 flex gap-4">
          <FaArrowLeft className="cursor-pointer" onClick={handleLeftCastChange} />
          <FaArrowRight className="cursor-pointer" onClick={handleRightCastChange} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {cast
          .slice(castIdx[0], castIdx[1])
          .map((c) => c.profile_path && <img src={"https://image.tmdb.org/t/p/original" + c.profile_path} key={c.id} className="w-[160px] h-[200px] object-cover rounded-xl" />)}
      </div>
    </div>
  );
};

export default Cast;
