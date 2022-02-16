import React from 'react';
import { makeStyles } from '@material-ui/core';

import img from '../yo.jpeg';

import TypeWriterEffect from 'react-typewriter-effect';

import styled from 'styled-components';

import ScrollAnimation from 'react-animate-on-scroll';

import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillFilePdf } from 'react-icons/ai';

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
                text='Alexis Beas'
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
                <a href={cv} download>
                  <p>Download CV</p>
                  <p>
                    <AiFillFilePdf />
                  </p>
                </a>
              </Cv>
            </div>
          </Ctn>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInY' animateOut='fadeOutLeft'>
          <Description>
            <h2>I'm 23 years old, I'm from Córdoba Argentina 🇦🇷</h2>
            <ul>
              <li>Henry Bootcamp (Full Stack Student) 2021 💻</li>
              <li>Alkemy Job Ready (Node/React) 2021-2022 💼</li>
            </ul>
            <div>
              <h2>My hobbies</h2>
              <div className='hobbies'>
                <p>Football ⚽</p>
                <p>Basketball 🏀</p>
                <p>Videogames 🎮 </p>
                <p>Rock And Roll 🤘🏽</p>
                <p>Good Music 🎷</p>
              </div>
            </div>
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
    background: 'url(https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center fixed',
    backgroundSize: 'cover',
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
  flex-direction: column;
  margin: 70px auto;
  width: 800px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  h2 {
    font-size: 1.8rem;
    color: #000;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 900px) {
      font-size: 1.6rem;
      margin: 2px;
    }
  }
  ul {
    list-style: none;
    font-size: 1.8rem;
    color: #000;
    margin: 2px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    text-align: center;
    margin: 10px;
    li:before {
      content: '🎓';
    }
  }

  .hobbies {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-size: 1.8rem;
    color: #000;
    margin: 2px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
  }

  @media screen and (max-width: 900px) {
    width: 380px;
  }

  @media screen and (max-width: 400px) {
    width: 340px;
    padding: 5px;
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
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.2rem;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 5px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #fff;
      background: rgba(0, 0, 0, 1);
      transform: scale(1.1);
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
