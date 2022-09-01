import React from 'react';
import { makeStyles } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { AiFillFilePdf } from 'react-icons/ai';
import { icons } from '../../array/index';
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
            <p>
              I am 24 years old, I am from Cordoba, Argentina. <br />I currently
              work as a front end programmer at "Grupo LPA" as a collaborator at
              "Banco Galicia"
            </p>
            <p>
              In 2021 I completed the intensive full stack developer bootcamp at 
              <a
                target='_blank'
                href='https://www.soyhenry.com/'
                rel='noreferrer'
              >
                Henry 
              </a>
                and then a "Job Ready" acceleration in 
              <a
                target='_blank'
                href='https://www.alkemy.org/acceleration'
                rel='noreferrer'
              >
                Alkemy
              </a>
            </p>
            <div className='redes-sociales'>
            {icons.map(({ icon, text, link }, index) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a href={link} target='_blank' rel={text} key={index}>
                  <p>
                    {text} <br/>
                    {icon} 
                  </p>
              </a>
            ))}
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
