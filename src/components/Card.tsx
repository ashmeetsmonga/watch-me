"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

interface CardProps {
  imgUrl: string;
  movieId: number;
}

const Card: FC<CardProps> = ({ imgUrl, movieId }) => {
  return (
    <Link href={`movie/${movieId}`}>
      <div className="bg-black-04 p-6 rounded-lg border border-black-08">
        <div className="relative">
          <div className={`absolute top-0 w-[275px] bg-black animate-pulse rounded-lg h-[350px] z-10`} />
          <img src={`https://image.tmdb.org/t/p/original${imgUrl}`} className={`relative w-[275px] object-cover rounded-lg h-[350px] z-20`} />
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
    </Link>
  );
};

export default Card;
