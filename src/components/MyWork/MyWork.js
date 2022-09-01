import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core';
import Slide from '../Slider/Slide';
import { imgE, imgR, imgOng, imgS } from '../../array/index';
import { Project } from './MyWorkStyled';

const MyWork = ({ id, dark }) => {
  const classes = useStyles();
  return (
    <main className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent}>
          <Project id={id}>
            <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
              <h3>Projects</h3>
            </ScrollAnimation>
            <div>
              <h1>App Sports </h1>
              <Slide
                img={imgS}
                type={'CHALLENGE REACT - TYPESCRIPT'}
                description={
                  'Challenge React with Typescript. Sports app similar to Tinder Firebase Auth, Firebase database, Styled-Components. Theme Dark-Light.'
                }
                link={'https://github.com/alexiscjscab/app-sports'}
              />

              <h1>ONG Somos Mas (Alkemy) </h1>
              <Slide
                img={imgOng}
                type={'FULL STACK NODE / REACT'}
                description={
                  'Group project between 6 people for the acceleration "JOB READY" of full stack node react in ALKEMY. Using good practices, GITFLOW as a workflow and SCRUM as an agile methodology. The technologies used were Node Express Sequelize MySQL React Redux ChakraUI JWT LocalStorage Formik, testing like Mocha, Chai and other technologies'
                }
                link={'https://github.com/alkemyTech/OT102-Client'}
                linkTwo={'htpps://github.com/alkemyTech/OT102-Server'}
              />
              <h1>Cute Clothes </h1>

              <Slide
                img={imgE}
                type={'E-COMMERCE TYPESCRIPT NODE / REACT'}
                description={
                  'Group Project of 6 people in Henry an E-Commerce made with Typescript. Back was with Node Express GraphQL. Front with React Redux MaterialUI Styled-Components. I worked as Front End, we used agile methodology such as SCRUM, having 30 min daily every day and once a week we presented the project to a Product Ower belonging to the Staff'
                }
                link={'https://github.com/tomasellis/henry-ecommerce'}
              />

              <h1>Rick And Morty </h1>
              <Slide
                img={imgR}
                type={'CHALLENGE FRONT REACT / SASS'}
                description={
                  'Back with Node Express and Axios consumes necessary data from the Rick And Morty API to send to the client. Front React Redux SASS Axios I request the back and receive JSON and also show the content and add functionalities such as filtering by gender, status, location, episodes and search by name '
                }
                link={'https://github.com/alexiscjscab/ReactRickAndMorty'}
              />
            </div>
          </Project>
      </div>
    </main>
  );
};

export default MyWork;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    backgroundColor: 'rgba(0,137,255,1)',
    background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1047%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(101%2c 177%2c 225%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c474.869C112.209%2c473.929%2c228.442%2c562.174%2c327.919%2c510.251C427.069%2c458.499%2c443.329%2c325.296%2c485.233%2c221.599C525.256%2c122.557%2c570.997%2c25.219%2c567.061%2c-81.531C562.851%2c-195.703%2c523.993%2c-304.422%2c462.29%2c-400.577C393.492%2c-507.79%2c317.733%2c-630.161%2c194.442%2c-662.208C71.555%2c-694.15%2c-51.026%2c-618.619%2c-165.537%2c-563.768C-265.049%2c-516.102%2c-350.96%2c-450.106%2c-422.942%2c-366.481C-494.729%2c-283.083%2c-548.03%2c-188.818%2c-579.138%2c-83.268C-614.253%2c35.875%2c-660.99%2c165.404%2c-613.533%2c280.191C-565.761%2c395.739%2c-450.648%2c477.962%2c-331.47%2c515.778C-223.162%2c550.145%2c-113.626%2c475.821%2c0%2c474.869' fill='%23288dcd'%3e%3c/path%3e%3cpath d='M1440 928.216C1523.618 939.777 1610.7350000000001 980.207 1687.532 945.1669999999999 1766.241 909.255 1814.597 825.798 1843.327 744.193 1870.693 666.462 1850.816 584.065 1843.561 501.977 1835.855 414.778 1853.625 317.29200000000003 1799.517 248.47699999999998 1744.98 179.11700000000002 1649.664 155.164 1562.133 144.053 1482.683 133.96800000000002 1407.479 165.022 1331.068 189.012 1256.129 212.54000000000002 1177.441 229.12099999999998 1120.123 282.825 1059.4180000000001 339.703 1021.106 416.03499999999997 1002.288 497.067 982.327 583.018 964.8489999999999 680.587 1010.1659999999999 756.299 1054.876 830.9970000000001 1152.037 849.9739999999999 1232.868 882.303 1299.888 909.1089999999999 1368.498 918.3299999999999 1440 928.216' fill='%23a9d4ee'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1047'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
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
    alignItems: 'center',
    textAlign: 'center'
  },
}));
