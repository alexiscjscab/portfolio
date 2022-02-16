import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core';
import Slide from './imgProject/Slide';
import { imgA, imgDog, imgE,  imgR, imgOng } from './array/index';

const MyWork = ({ id, dark }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent}>
        <div className={classes.ctn}>
          <Project id={id}>
            <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
              <h3>Projects</h3>
            </ScrollAnimation>
            <div>
              <a
                href='https://github.com/alkemyTech/OT102-Client'
                target='_black'
              >
                <h1>ONG Somos Mas (Alkemy) </h1>
              </a>
              <Slide
                img={imgOng}
                type={'FULL STACK NODE / REACT'}
                description={
                  'Group project between 6 people for the acceleration "JOB READY" of full stack node react in ALKEMY. Using good practices, GITFLOW as a workflow and SCRUM as an agile methodology. The technologies used were Node Express Sequelize MySQL React Redux ChakraUI JWT LocalStorage Formik, testing like Mocha, Chai and other technologies'
                }
              />
              <a
                href='https://github.com/alexiscjscab/ReactRickAndMorty'
                target='_black'
              >
                <h1>Rick And Morty </h1>
              </a>
              <Slide
                img={imgR}
                type={'CHALLENGE REACT SASS'}
                description={
                  'Back with Node Express and Axios consumes necessary data from the Rick And Morty API to send to the client. Front React Redux SASS Axios I request the back and receive JSON and also show the content and add functionalities such as filtering by gender, status, location, episodes and search by name '
                }
              />
              <a
                href='https://github.com/alexiscjscab/alkemy-fullstack'
                target='_black'
              >
                <h1>Challenge Alkemy </h1>
              </a>
              <Slide
                img={imgA}
                type={'CHALLENGE FULL STACK NODE REACT'}
                description={
                  'Challenge (Income / expenses) to do the Acceleration in Alkemy as a full stack Node / React. Back Node Express Sequelize Postgres. Front React Redux Styled-Components '
                }
              />

              <a
                href='https://github.com/tomasellis/henry-ecommerce'
                target='_black'
              >
                <h1>Cute Clothes </h1>
              </a>
              <Slide
                img={imgE}
                type={'FULL STACK E-COMMERCE TYPESCRIPT NODE REACT'}
                description={
                  'Group Project of 6 people in Henry an E-Commerce made with Typescript. Back was with Node Express GraphQL. Front with React Redux MaterialUI Styled-Components. I worked as Front End, we used agile methodology such as SCRUM, having 30 min daily every day and once a week we presented the project to a Product Ower belonging to the Staff'
                }
              />

              <a
                href='https://github.com/alexiscjscab/PI-Dogs-FT15a'
                target='_black'
              >
                <h1>App Dogs </h1>
              </a>
              <Slide
                img={imgDog}
                type={'SPA FULL STACK'}
                description={
                  'Individual Project in Henry a SPA that consumes the back an API Dogs giving improvements such as filtering, ordering and search. The Front React Redux Styled-Components was made with Node Express Sequelize Postgres Axios.'
                }
              />

              {/*
                  <a
                href='https://github.com/alexiscjscab/weatherReact'
                target='_black'
              >
                <h1>Weather App </h1>
              </a>
              <Slide
                img={imgW}
                type={'REACT/ STYLED-COMPONENTS'}
                description={
                  'Weather APP performed during the M2 Front End module in Henry. The APP consumes the Weather API was made with React Styled-Components Axios '
                }
              />
                */}

              {/*
                  <a
                href='https://github.com/alexiscjscab/Pokedex-React'
                target='_black'
              >
                <h1>Pokedex </h1>
              </a>
              <Slide
                img={imgP}
                type={'REACT/ STYLED-COMPONENTS'}
                description={
                  'Pokedex consumes the pokemon API is made with React Styled-Components '
                }
              />
                */}
            </div>
          </Project>
        </div>
      </div>
    </div>
  );
};

export default MyWork;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    backgroundColor: 'rgba(0,137,255,1)',
    background:
      'url(https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center fixed',
    backgroundSize: 'cover',
    color: '#000',
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
  ctn: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const Project = styled.div`
  width: 800px;
  overflow: hidden;
  height: 300px;
  font-family: 'Josefin Sans', sans-serif;
  color: #000;
  height: 100%;
  cursor: default;
  @media screen and (max-width: 900px) {
    width: 480px;
  }
  @media screen and (max-width: 500px) {
    width: 360px;
  }
  @media screen and (max-width: 360px) {
    width: 338px;
  }
  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }

  h3 {
    margin: 30px;
    font-size: 40px;
    color: #fff;
    border-bottom: 2px solid #fff;
    display: inline-block;
    @media screen and (max-width: 360px) {
      margin: 10px;
      font-size: 34px;
    }
  }
`;
