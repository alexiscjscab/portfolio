/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

const Slide = ({ img, type }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      //Obtener primer elemtno
      const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition = `100ms ease-out all`;

      //tamaño

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      //mover
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // cambio
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        /// mandar primer elemento al final
        slideshow.current.appendChild(primerElemento);

        // remove evenListener

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // eventListener

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      // ultimo elemento
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];

      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "100ms ease-out all";
        slideshow.current.style.transform = `translateX(0px)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 5000);

    slideshow.current.addEventListener("mouseenter", () => {
      clearInterval(intervaloSlideshow.current);
    });

    slideshow.current.addEventListener("mouseleave", () => {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, 5000);
    });
  }, []);

  return (
    <div>
      <CtnSlider ref={slideshow}>
        {img.map(({ img, id, link }) => (
          <Slider key={id}>
            <div>
              <a href={link} target="_blank">
                <img src={img} alt="" height={140} />
              </a>
            </div>

            <div className="button">
              <span>
                <AiFillLeftCircle size={30} onClick={anterior} />{" "}
              </span>
              <span>
                <AiFillRightCircle size={30} onClick={siguiente} />{" "}
              </span>
            </div>
          </Slider>
        ))}
      </CtnSlider>
      <Description>
        <p>{type}</p>
      </Description>
    </div>
  );
};

export default Slide;

const Slider = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 100;
  /* max-height: 500px; */

  img {
    width: 800px;
    height: 300px;
    border-bottom: 2px solid #000;
    object-fit: content;
    @media screen and (max-width: 900px) {
      width: 500px;
      height: 200px;
    }
    @media screen and (max-width: 500px) {
      width: 360px;
      height: 150px;
    }
    @media screen and (max-width: 360px) {
      width: 338px;
      height: 130px;
    }
  }

  .button {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -48px;
    margin: 2px;
  }

  .button span {
    color: rgba(170, 30, 30);
    cursor: pointer;
    margin: 5px;
    transition: 1s ease-out all;
    &:hover {
      color: #555;
      transform: scale(1.4);
    }
  }
`;

const CtnSlider = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Description = styled.div`
  cursor: alias;
  p {
    color: #000;
    margin-bottom: 10px;
    position: relative;
    bottom: 15px;
  }
`;
