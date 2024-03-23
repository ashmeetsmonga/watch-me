import React, { FC } from "react";

interface DetailsProps {
  description: string;
}

const Details: FC<DetailsProps> = ({ description }) => {
  return (
    <div className="flex gap-4 w-full p-20">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="p-10 bg-black-04 rounded-lg border border-black-08">
          <h2 className="text-gray-300 font-bold text-xl mb-2">Description</h2>
          <p className="font-thin">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
