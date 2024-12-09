import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  return (
    <div className="book_ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {!Number.isInteger(rating) && <FontAwesomeIcon icon={faStarHalfAlt} />}
    </div>
  );
};

export default Rating;

