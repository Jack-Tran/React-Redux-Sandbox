import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star fa-2x"
              : value >= 0.5
              ? "fas fa-star-half-alt fa-2x"
              : "far fa-star fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star fa-2x"
              : value >= 1.5
              ? "fas fa-star-half-alt fa-2x"
              : "far fa-star fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star fa-2x"
              : value >= 2.5
              ? "fas fa-star-half-alt fa-2x"
              : "far fa-star fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star fa-2x"
              : value >= 3.5
              ? "fas fa-star-half-alt fa-2x"
              : "far fa-star fa-2x"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star fa-2x"
              : value >= 4.5
              ? "fas fa-star-half-alt fa-2x"
              : "far fa-star fa-2x"
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;