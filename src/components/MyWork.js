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
      `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(32%2c 130%2c 216%2c 1)'%3e%3c/rect%3e%3cpath d='M140 98.97C68.32 52.16 0 27.24 0 0C0 -22.24 70 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C470.98 0 491.28 -27.39 521.96 0C561.28 35.11 530.66 125 560 125C594.55 125 596.97 47.11 649.74 0C666.97 -15.39 674.87 0 700 0C770 0 770 0 840 0C891.22 0 896.07 -12 942.44 0C966.07 6.12 958.31 36.24 980 36.24C1014.65 36.24 1015.75 10.19 1055.12 0C1085.75 -7.93 1087.56 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1470 0 1478.24 -8.24 1540 0C1548.24 1.1 1547.22 13.48 1540 18.67C1477.22 63.79 1468.04 56.82 1400 100.63C1373.81 117.49 1351.54 124.13 1351.54 140C1351.54 153.22 1375.09 151.52 1400 158.81C1469.32 179.09 1495.88 156.96 1540 195.15C1565.88 217.55 1540 237.58 1540 280C1540 350 1540 350 1540 420C1540 448.52 1557.18 457.71 1540 477.04C1494.96 527.71 1478.96 522.43 1415.56 560C1408.96 563.91 1407.78 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C630 560 630 560 560 560C490 560 490 560 420 560C350 560 350 560 280 560C229.88 560 179.77 585.52 179.77 560C179.77 516.61 229.4 490.59 280 422.19C281.18 420.59 283.33 421.35 283.33 420C283.33 418.2 281.58 418.01 280 415.88C229.7 348.01 197.27 354.41 179.57 280C164.46 216.47 226.83 196.97 214.38 140C207.05 106.45 175.51 122.16 140 98.97' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 63.33C1094.39 63.33 1082.56 105.07 1082.56 140C1082.56 161.09 1098.22 175.38 1120 175.38C1157.19 175.38 1200.5 164.74 1200.5 140C1200.5 108.72 1153.36 63.33 1120 63.33' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 166.05C29.25 166.05 74.33 213.71 102.08 280C127.49 340.69 122.36 354.13 106.33 420C88.29 494.13 77.68 502.4 33.94 560C24.52 572.4 3.31 573.66 0 560C-13.66 503.66 0 490 0 420C0 350 0 350 0 280C0 223.02 -21.79 166.05 0 166.05' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 363.46C803.44 363.46 771.63 388.36 771.63 420C771.63 458.63 802.05 504 840 504C885.23 504 938 457.45 938 420C938 387.18 886.62 363.46 840 363.46' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 388.18C1073.38 388.18 1023.45 398.86 1023.45 420C1023.45 443.34 1075.62 477.14 1120 477.14C1151.35 477.14 1174.9 444.7 1174.9 420C1174.9 400.22 1149.1 388.18 1120 388.18' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M140 38.62C110.88 22.33 85.37 10.63 85.37 0C85.37 -8.68 112.69 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C451.96 0 476.2 -21.86 483.91 0C500.9 48.14 447.37 85.73 469.41 140C485.42 179.42 516.71 160.37 560 187.38C628.9 230.37 693.78 232.69 693.78 280C693.78 328.34 628.82 332.35 560 378.69C524.87 402.35 485.88 397.35 485.88 420C485.88 444.25 518.5 468.43 560 472.5C625.56 478.93 644.28 419.33 700 441C756.78 463.08 785 522.37 785 560C785 581.87 742.5 560 700 560C630 560 630 560 560 560C514.35 560 504.89 578.1 468.7 560C434.89 543.1 443.07 490 420 490C397.98 490 410.18 544.17 378.52 560C340.18 579.17 329.26 560 280 560C249.77 560 219.55 575.39 219.55 560C219.55 533.83 243.38 511.73 280 476.88C316.94 441.73 366.67 455.2 366.67 420C366.67 373.23 322.79 366.89 280 312.94C267.28 296.89 255.65 298.08 255.65 280C255.65 250.5 262.43 245.73 280 217.78C306.43 175.73 343.64 171.94 343.64 140C343.64 117.49 311.71 124.67 280 108.89C209.89 73.98 208.19 76.77 140 38.62' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M723.33 140C722.95 70.03 700.31 39.8 733.48 0C758.65 -30.2 786.74 0 840 0C869.88 0 875.33 -13.51 899.76 0C945.33 25.2 940.29 38.29 980 77.41C1011.34 108.29 1010.35 109.29 1041.86 140C1080.35 177.51 1074.02 208.09 1120 213.85C1183.09 221.75 1189.79 168.02 1260 167.32C1329.79 166.62 1333.03 182.19 1400 211.04C1463.82 238.53 1521.58 237.68 1521.58 280C1521.58 331.39 1466.92 349.56 1400 398.46C1371.13 419.56 1338.19 392.48 1330 420C1314.16 473.25 1373.17 517.54 1351.94 560C1338.17 587.54 1305.97 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C928.34 560 876.67 579.72 876.67 560C876.67 533.55 923.85 470.3 980 467.66C1045.52 464.58 1057.33 559.9 1120 548.57C1189.1 536.07 1243.53 475.58 1243.53 420C1243.53 375.5 1186.33 362.5 1120 348.41C1054.56 334.5 1046.53 376.42 980 364C906.53 350.29 912.79 321.11 840 296.15C790.29 279.11 760.12 313.62 735 280C701.78 235.54 723.71 210.03 723.33 140' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 107.06C1201.35 107.06 1146.25 30.97 1146.25 0C1146.25 -22.56 1203.13 0 1260 0C1325 0 1390 -23.32 1390 0C1390 30.21 1323.23 107.06 1260 107.06' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 247.44C8.36 247.44 21.94 259.89 29.17 280C52.95 346.17 70.2 354.37 62.03 420C55.62 471.49 16.9 514.23 0 514.23C-14.12 514.23 0 467.12 0 420C0 350 0 350 0 280C0 263.72 -6.23 247.44 0 247.44' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 31.11C242.53 17.2 206.32 8.1 206.32 0C206.32 -7.46 243.16 0 280 0C350 0 350 0 420 0C432.93 0 445.87 -9.39 445.87 0C445.87 30.28 449.89 73.72 420 79.33C366.96 89.28 349.37 56.86 280 31.11' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 70C827.78 70 809.57 25.02 809.57 0C809.57 -9.98 824.79 0 840 0C848.54 0 857.07 -6.7 857.07 0C857.07 28.3 851.53 70 840 70' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M900.87 140C900.87 113.5 943.32 118.59 980 118.59C993.47 118.59 1001.16 125.92 1001.16 140C1001.16 201.62 1003.26 270 980 270C953.12 270 900.87 189.2 900.87 140' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 4.12C1257.75 4.12 1255.63 1.19 1255.63 0C1255.63 -0.87 1257.82 0 1260 0C1262.5 0 1265 -0.9 1265 0C1265 1.16 1262.43 4.12 1260 4.12' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M470 280C470 260.08 516.93 241.23 560 241.23C589.93 241.23 616 260.19 616 280C616 300.23 590.13 321.31 560 321.31C517.13 321.31 470 300.12 470 280' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M987.37 280C987.37 265.93 1052.96 259.03 1120 252.31C1189.27 245.37 1190.1 249.94 1260 252.68C1330.1 255.43 1331.74 252.28 1400 263.28C1416.47 265.94 1429.47 269.74 1429.47 280C1429.47 292.46 1419.19 304.02 1400 308.72C1334.45 324.76 1330 321.5 1260 321.48C1190 321.46 1189.37 319.19 1120 308.64C1053.05 298.45 987.37 294.09 987.37 280' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 364C4.54 364 17.72 393.23 17.72 420C17.72 434.69 4.83 446.92 0 446.92C-4.03 446.92 0 433.46 0 420C0 392 -4.32 364 0 364' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M259.32 560C259.32 551.05 267.94 531.56 280 531.56C295.13 531.56 313.7 551.94 313.7 560C313.7 566.16 296.85 560 280 560C269.66 560 259.32 565.27 259.32 560' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M544.78 560C544.78 555.77 550.53 545.42 560 545.42C585.07 545.42 613.85 556.29 613.85 560C613.85 563.58 586.92 560 560 560C552.39 560 544.78 563.06 544.78 560' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M960 560C960 554.88 969.07 542.13 980 542.13C994.62 542.13 1011.11 555.21 1011.11 560C1011.11 564.15 995.56 560 980 560C970 560 960 563.82 960 560' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1193.5 560C1193.5 539.27 1231.04 490 1260 490C1284.14 490 1299.7 536.56 1299.7 560C1299.7 571.56 1279.85 560 1260 560C1226.75 560 1193.5 574.27 1193.5 560' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
      backgroundSize: '100% 100%',
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
    color: #fff;
    cursor: pointer;
    
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
