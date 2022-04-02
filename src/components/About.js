import React from 'react';
import { makeStyles } from '@material-ui/core';

import img from '../yo.jpeg';

import { Typewriter } from 'react-simple-typewriter';

import styled from 'styled-components';

import ScrollAnimation from 'react-animate-on-scroll';

import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillFilePdf } from 'react-icons/ai';

import cv from '../cv/cv.pdf';
import wawe from './background/WaweLightBlue.svg';

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

            <div className='content' id='typeWrite'>
              {/* <TypeWriterEffect
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
                // hideCursorAfterText={true}
                scrollArea={id}
              /> */}
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
                  words={['Alexis Beas', 'Developer :)']}
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
                  words={['Front', 'Back', 'Full Stack :)']}
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
          </Ctn>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInY' animateOut='fadeOutLeft'>
          <Description>
            <div className='contentOne'>

            <div className='aboutMe'>
              <p>About Me</p>
              <ul>
                <li>
                I am 23 years old, from Cordoba Argentina
                </li>
                
                <li>
                I currently work as a front end developer
                </li>
              
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
                <li>
                  Football ⚽
                </li>
                <li>
                  Basketball 🏀
                </li>
                <li>
                  Videogames 🎮
                </li>
                <li>
                  Rock N' Roll 🤘🏽
                </li>
              </ul>
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

const Description = styled.div`
    width: 100vw;
    margin-top: 2 rem;
  .contentOne {

    display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 2.5rem;
  cursor: default;
  .aboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;
    background: rgba(230,230,230,0.4);
    box-shadow: 0px 0px 10px #000;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1) translateY(-5px);
      box-shadow: 0px 0px 5px #fff inset, 0px 0px 10px #000;
    }
    p {
      font-family: 'Josefin Sans', sans-serif;
      border-bottom: 1px solid #fff;
      letter-spacing: 1px;
      font-weight: 700;
      margin: 5px 0;
    }
    ul {
      list-style: none;
      color: #000;
      margin: 2px;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 800;
      text-align: center;
      color: rgba(0,0,0,1);
      text-shadow: 0px 0px 2px #fff;
      
    }
  }
  
  .academic {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    border-radius: 10px;
    background: rgba(230,230,230,0.4);
    box-shadow: 0px 0px 10px #000;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1) translateY(-5px);
      box-shadow: 0px 0px 5px #fff inset, 0px 0px 10px #000;
    }
    p {
      font-family: 'Josefin Sans', sans-serif;
      border-bottom: 1px solid #fff;
      letter-spacing: 1px;
      font-weight: 700;
      margin: 5px 0;
    }
    ul {
      list-style: none;
      color: #000;
      margin: 2px;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 800;
      text-align: center;
      color: rgba(0,0,0,1);
      text-shadow: 0px 0px 2px #fff;
      
    }
  }
}

.contentTwo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  .hobbies {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;
    background: rgba(230,230,230,0.4);
    box-shadow: 0px 0px 10px #000;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1) translateY(-5px);
      box-shadow: 0px 0px 5px #fff inset, 0px 0px 10px #000;
    }
    p {
      font-family: 'Josefin Sans', sans-serif;
      border-bottom: 1px solid #fff;
      letter-spacing: 1px;
      font-weight: 700;
      margin: 5px 0;
    }
    ul {
      list-style: none;
      color: #000;
      margin: 2px;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 800;
      text-align: center;
      color: rgba(0,0,0,1);
      text-shadow: 0px 0px 2px #fff;
    }
  }

}

`;

const Ctn = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  margin-top: 4rem;
  .imagen {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 20px;

    img {
      height: 260px;
      width: 260px;
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
    font-size: 1.5rem;
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
