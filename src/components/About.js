import React from 'react';
import { makeStyles } from '@material-ui/core';

import img from '../yo.jpeg';

import TypeWriterEffect from 'react-typewriter-effect';

import styled from 'styled-components';

import ScrollAnimation from 'react-animate-on-scroll';

import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

import cv from '../cv/cv.pdf';

// iconos
export const icons = [
  {
    icon: <SiGithub size={30} />,
    text: 'alexiscjscab',
    link: 'https://github.com/alexiscjscab',
  },
  {
    icon: <SiLinkedin size={30} />,
    text: 'alexis-beas-dev',
    link: 'https://www.linkedin.com/in/alexis-beas-dev/',
  },
  {
    icon: <SiGmail size={30} />,
    text: 'alexiscjscab@gmail.com',
    link: 'mailto:alexiscjscab@gmail.com',
  },
];

const About = ({ id, dark }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <ScrollAnimation animateIn='bounceInRight' animateOut='fadeOutLeft'>
          <Ctn>
            <div className='imagen'>
              <img src={img} alt='' />
            </div>

            <div className='content'>
              <TypeWriterEffect
                text="Alexis Beas"
                textStyle={{
                  fontSize: '3rem',
                  color: 'white',
                  margin: '5px',
                  fontFamily: "'Lobster', cursive",
                  textShadow: '2px 3px #000',
                  textAlign: 'center',
                }}
                startDelay={100}
                cursorColor='white'
                typeSpeed={180}
                hideCursorAfterText={true}
              />
              <TypeWriterEffect
                textStyle={{
                  fontSize: '2.5rem',
                  color: 'white',
                  margin: '5px',
                  fontFamily: "'Lobster', cursive",
                  textShadow: '2px 3px #000',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
                startDelay={350}
                cursorColor='white'
                typeSpeed={180}
                multiText={['Front End', 'Back End', 'Full Stack :)']}
                multiTextDelay={1000}
                hideCursorAfterText={true}
              />

              <Cv>
                <p>
                  <a href={cv} download>
                    Download CV
                  </a>
                </p>
              </Cv>
            </div>
          </Ctn>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInY' animateOut='fadeOutLeft'>
          <Description>
            <h2>
            I'm 23 years old, I'm from Córdoba Argentina 🇦🇷, I learned about web programming at the beginning of 2021 and decided to do the Henry bootcamp (+800hs) where I discovered my passion for code 👨‍💻. After graduating, I accelerated in Alkemy as a Full Stack Node/React and was able to reinforce my skills as a programmer and teamwork with an agile methodology. I am a creative person, curious and always eager to learn something new. My hobbies are Football ⚽, Basketball 🏀, Video Games 🎮, Sharing with Friends 🍻, Rock N' Roll 🤘 and Good Music 🎧
            </h2>
          </Description>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    backgroundColor: 'rgba(0,137,255,1)',
    background:
      'linear-gradient(90deg, rgba(0,137,255,1) 0%, #00bdd0 50%, rgba(0,137,255,1) 100%)',
    color: '#fff',
  },
  sectiondark: {
    background: '#ddd',
    color: '#fff',
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const Description = styled.div`
  display: flex;
  justify-content: center;
  margin: 70px auto;
  width: 800px;
  background: rgba(230, 230, 230, 0.22);
  border-radius: 0px 100px 0px 100px;
  padding: 30px;
  h2 {
    font-size: 1.8rem;
    color: #000;
    margin: 5px;
    font-family: 'Josefin Sans', sans-serif;
    text-shadow: 2px 1px #fff;
    text-align: center;

    @media screen and (max-width: 900px) {
      font-size: 1.6rem;
      margin: 2px;
    }
  }

  @media screen and (max-width: 900px) {
    width: 380px;
  }

  @media screen and (max-width: 400px) {
    width: 340px;
    padding: 5px;
    background: transparent;
  }
`;

const Ctn = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 70px;
  padding: 10px;

  .imagen {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 20px;

    img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      filter: sepia(10%);
    }
  }
  .content {
    text-align: center;
    width: 360px;
    margin: 10px;
    padding: 10px;
    text-align: center;
  }
`;

const Cv = styled.div`
  margin-top: 15px;
  a {
    text-decoration: none;
    color: #000;
    font-family: 'Lobster', cursive;
    font-size: 2.2rem;
    text-shadow: 2px 3px #fff;
    background: rgba(255,255,255,0.5);
    border-radius: 10px;
    padding: 10px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #fff;
      text-shadow: 2px 3px #000;
      background: rgba(0,0,0,0.5);
    }
  }
`;
