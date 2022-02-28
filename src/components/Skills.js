import React from 'react';
import { makeStyles } from '@material-ui/core';

import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const skills = [
  {
    name: 'HTML',
    img: 'https://img.icons8.com/color/2x/html-5.png',
  },
  {
    name: 'CSS',
    img: 'https://img.icons8.com/color/2x/css3.png'
  },
  {
    name: 'SASS',
    img: 'https://img.icons8.com/color/2x/sass.png'
  },
  {
    name: 'Javascript',
    img: 'https://img.icons8.com/color/48/000000/javascript--v2.png'
  },
  {
    name: 'TypeScript',
    img: 'https://img.icons8.com/color/2x/typescript.png'
  },
  {
    name: 'React',
    img: 'https://img.icons8.com/officel/344/react.png'
  },
  {
    name: 'Redux',
    img: 'https://img.icons8.com/color/2x/redux.png'
  },
  {
    name: 'Node',
    img : 'https://img.icons8.com/color/2x/nodejs.png'
  },
  {
    name: 'Express',
    img: 'https://nashvillesoftwareschool.com/images/technologies/express.png'
  },
  {
    name: 'Postgres',
    img: 'https://img.icons8.com/color/2x/postgresql.png'
  },
  {
    name: 'MySQL',
    img: 'https://img.icons8.com/fluency/2x/mysql-logo.png'
  },
  {
    name: 'Sequelize',
    img: 'https://khalilstemmler.com/img/blog/sequelize/banner.png'
  },
  {
    name: 'GraphQL',
    img: 'https://img.icons8.com/color/2x/graphql.png'
  },
  {
    name: 'Git',
    img: 'https://img.icons8.com/color/2x/git.png'
  },
  {
    name: 'postman',
    img : 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/2x/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png'
  },
];

const Skills = ({ id, dark }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <Ctn>
          <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
            <h2> Skills </h2>
          </ScrollAnimation>

          {skills.map(({ name, img }, index) =>
            index % 2 === 0 ? (
              <ListSkillsL key={name}>
                <img src={img} alt={name}/>
              </ListSkillsL>
            ) : (
              <ListSkillsR key={name}>
                <img src={img} alt={name}/>
              </ListSkillsR>
            )
          )}
        </Ctn>
      </div>
    </div>
  );
};

export default Skills;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    backgroundColor: '#2082d8',
    width: '100%',
  },
  sectiondark: {
    minHeight: '100vh',
    color: '#000',
    background: '#ddd',
    backgroundSize: '100% 100%',
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const moverRight = keyframes`
  from{
    margin-left: 50%;
  }
  to{
    margin-left: 0%;
    transform: rotate(360deg);
  }
`;

const moverLeft = keyframes`
  from{
    margin-right: 50%;
  }
  to{
    margin-right: 0%;
    transform: rotate(360deg);
  }
`;

const ListSkillsL = styled.div`
  img {
    width: 40px;
    height: 40px;
    margin: 3px;
    padding: 3px;
    border-radius: 50px;
    animation-name: ${moverLeft};
    animation-duration: 8s;
    background: #333;
    cursor: pointer;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    box-shadow: 4px -3px 0 #2082d8;
  }
`;

const ListSkillsR = styled.div`
  
  img {
    width: 40px;
    height: 40px;
    margin: 3px;
    padding: 3px;
    border-radius: 50px;
    z-index: 999;
    background: #333;
    animation-name: ${moverRight};
    animation-duration: 8s;
    cursor: pointer;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    box-shadow: -4px -3px 0 #2082d8;
  }
`;

const Ctn = styled.div`
  margin: 30px 0;
  text-align: center;
  h2 {
    display: inline-block;
    font-size: 2.6rem;
    margin-bottom: 30px;
    border-bottom: 2px solid #000;
    cursor: default;
  }
`;
