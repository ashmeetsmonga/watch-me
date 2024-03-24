import React, { FC } from "react";

interface DescriptionProps {
  description: string;
}

const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="px-10 py-7 bg-black-04 rounded-lg border border-black-08">
      <h2 className="text-gray-300 font-bold text-xl mb-2">Description</h2>
      <p className="font-thin">{description}</p>
    </div>
  );
};

export default Description;
