import { Review } from "@/utils/types";
import React, { FC } from "react";

interface ReviewProps {
  reviews: Review[];
}
const Reviews: FC<ReviewProps> = ({ reviews }) => {
  return <div>Reviews</div>;
};

export default Reviews;
