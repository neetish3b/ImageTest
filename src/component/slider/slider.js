import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderImage from "../slider-image/slider-image";
import BtnSlider from "../sliderBtn/BtnSlider";
import "../slider/slider.css";

const Slider = (props) => {
  const [images, setImages] = useState([]);
  const [slideId, setSlideId] = useState(1);
  const nextSlide = () => {
    if (slideId !== 9) {
      setSlideId(slideId + 1);
    } else if (slideId === 9) {
      setSlideId(1);
    }
  };
  const prevSlide = () => {
    if (slideId !== 1) {
      setSlideId(slideId - 1);
    } else if (slideId === 1) {
      setSlideId(9);
    }
  };

  const moveDot = (id) => {
    setSlideId(id);
  };

  useEffect(() => {
    const imageListUrl = `https://picsum.photos/list`;
    const getImages = () => {
      axios
        .get(imageListUrl)
        .then((res) => {
          setImages(res.data.slice(0, 9));
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getImages();
  });

  return (
    <div className="slider-container">
      {images.map((image, id) => {
        const randomImage = Math.floor(Math.random() * 10);
        return (
          <div
            key={image.id}
            className={slideId === id + 1 ? "slide active-anim" : "slide"}
          >
            <SliderImage id={image.id * randomImage} author={image.author} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: 9 }).map((image, id) => (
          <div
            onClick={() => moveDot(id + 1)}
            className={slideId === id + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
