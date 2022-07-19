import React from "react";
import "../slider/slider.css";
import leftArrow from "../../icon/left-arrow.svg";
import rightArrow from "../../icon/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="hello" />
    </button>
  );
}
