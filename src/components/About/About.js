import React from 'react';
import { makeStyles } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { AiFillFilePdf } from 'react-icons/ai';

import wawe from '../../assets/background/WaweLightBlue.svg';
import img from '../../assets/img/yo.jpeg';
import cv from '../../assets/cv/cv.pdf';

import { CtnAbout, Cv, Description } from './AboutStyled';

const About = ({ id, dark }) => {
  const classes = useStyles();
  return (
    <main className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <ScrollAnimation animateIn='bounceInRight' animateOut='fadeOutLeft'>
          <CtnAbout>
            <div className='imagen'>
              <img src={img} alt='Alexis Beas' />
            </div>

            <div className='content' id='typeWrite'>
              <p
                style={{
                  fontSize: '3rem',
                  color: 'white',
                  margin: '5px',
                  fontFamily: "'Lobster', cursive",
                  textShadow: '2px 3px #000',
                  textAlign: 'center',
                }}
              >
                <Typewriter
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={70}
                  words={['Alexis Beas', 'Developer!']}
                />
              </p>

              <p
                style={{
                  fontSize: '3rem',
                  color: 'white',
                  margin: '5px',
                  fontFamily: "'Lobster', cursive",
                  textShadow: '2px 3px #000',
                  textAlign: 'center',
                }}
              >
                <Typewriter
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={70}
                  words={['Javascript ^^', 'Typescript :)']}
                />
              </p>

              <Cv>
                <a href={cv} download>
                  <p>Download CV</p>
                  <p>
                    <AiFillFilePdf />
                  </p>
                </a>
              </Cv>
            </div>
          </CtnAbout>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInY' animateOut='fadeOutLeft'>
          <Description>
            <div className='contentOne'>
              <div className='aboutMe'>
                <p>About Me</p>
                <ul>
                  <li>I am 23 years old, from Cordoba Argentina</li>

                  <li>I currently work as a front end developer</li>
                </ul>
              </div>

              <div className='academic'>
                <p>Studies / Practices </p>
                <ul>
                  <li>Henry Bootcamp (Full Stack Student) 2021 💻</li>
                  <li>Alkemy Job Ready (Node / React) 2021-2022 💼</li>
                </ul>
              </div>
            </div>
            <div className='contentTwo'>
              <div className='hobbies'>
                <p>My Hobbies</p>
                <ul>
                  <li>Football ⚽</li>
                  <li>Basketball 🏀</li>
                  <li>Videogames 🎮</li>
                  <li>Rock N' Roll 🤘🏽</li>
                </ul>
              </div>
            </div>
          </Description>
        </ScrollAnimation>
      </div>
    </main>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    backgroundColor: '#2082d8',
    background: 'url(' + wawe + ')',
    backgroundSize: '100% 100%',
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
    alignItems: 'center',
  },
}));


