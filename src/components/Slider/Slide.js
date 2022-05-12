/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

const Slide = ({ img, type, description, link, linkTwo }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  const anterior = () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <CtnSlider ref={slideshow}>
        {img.map(({ img }, index) => (
          <Slider key={index}>
            <div>
              <img src={img} alt="" height={140} />
            </div>
            <div className="button">
              <span>
                <AiFillLeftCircle size={30} onClick={anterior} />
              </span>
              <span>
                <AiFillRightCircle size={30} onClick={siguiente} />
              </span>
            </div>
          </Slider>
        ))}
      </CtnSlider>
      <Description>
        <h4>{type}</h4>
        <Icons>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <p>
              
              <SiGithub size={30} />
            </p>
          </a>
          {linkTwo && (
            <a href={linkTwo} target="_blank" rel="noopener noreferrer">
              <p>
                <SiGithub size={30} />
              </p>
            </a>
          )}
        </Icons>
        <p className='description'>{description}</p>
      </Description>
    </>
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
    width: 500px;
    height: 220px;
    border-radius: 10px;    
    object-fit: content;
    @media screen and (max-width: 900px) {
      width: 480px;
      height: 180px;
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
    top: -30px;
    margin: 2px;
  

  span {
    color: #250736;
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
  padding: 10px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.5);
  .description{ 
    p {
    color: #000;
    position: relative;
    font-size: 20px;
    }
  }
  h4 {
    margin-bottom: 5px;
    color: #000;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 5px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    &:hover {
      color: #fff;
      transform: translateY(-5px);
    }
  }
`;
