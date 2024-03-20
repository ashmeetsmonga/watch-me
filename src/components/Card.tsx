"use client";

import React, { FC, useEffect, useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

interface CardProps {
  imgUrl: string;
}

const Card: FC<CardProps> = ({ imgUrl }) => {
  const [loadingContext, setLoadingContext] = useState(true);

  return (
    <div className="bg-black-04 p-6 rounded-lg border border-black-08">
      <div className="relative">
        <div className={`w-[275px] h-[350px] bg-black animate-pulse rounded-lg ${!loadingContext ? "h-0" : "h-[350px]"}`} />
        <img
          src={`https://image.tmdb.org/t/p/original${imgUrl}`}
          onLoad={() => {
            setLoadingContext(false);
          }}
          className={`w-[275px] object-cover rounded-lg ${loadingContext ? "h-0" : "h-[350px]"}`}
        />
      </div>
      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex gap-2 py-2 px-4 rounded-full items-center bg-black-01 border border-black-08">
          <BsClockFill />
          1h 52mins
        </div>
        <div className="flex gap-2 py-2 px-4 rounded-full items-center bg-black-01 border border-black-08">
          <FaEye />
          2k
        </div>
      </div>
    </div>
  );
};

export default Card;
