import React from "react";
import "./slider-image.css";

const SliderImage = (props) => {
  return (
    <div className="slide-image-container">
      <img
        className="slide-image"
        src={`https://picsum.photos/400/600?image=${props.id}`}
        alt="sample"
      />
      <div className="image-caption">
        <h2>{props.author}</h2>
      </div>
    </div>
  );
};
export default SliderImage;
