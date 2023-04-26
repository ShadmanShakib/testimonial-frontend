"use client";
import { useState } from "react";

type RatingProps = {
  maxRating: number;
  defaultRating: number;
};

const Rating = ({ maxRating, defaultRating }: RatingProps) => {
  const [rating, setRating] = useState(defaultRating);

  const handleRatingClick = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center gap-2">
      {[...Array(maxRating)].map((_, i) => {
        const ratingValue = i + 1;
        const filled = ratingValue <= rating;
        const color = filled ? "#FBBF24" : "#E5E7EB";

        return (
          <svg
            key={i}
            onClick={() => handleRatingClick(ratingValue)}
            className="h-6 w-6 cursor-pointer hover:scale-110"
            viewBox="0 0 24 24"
            fill={color}
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
