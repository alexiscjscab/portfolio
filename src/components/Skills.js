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
  }
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
    color: '#2082d8',
    background:
      'linear-gradient(90deg, rgba(218,215,197,1) 0%, rgba(236,237,237,1) 50%, rgba(218,215,197,1) 100%)',
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
    width: 60px;
  height: 60px;
    animation-name: ${moverLeft};
    animation-duration: 6s;
    background: #333;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    transition: 2;
    cursor: alias;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    box-shadow: 8px -6px 0 #2082d8;
  }
`;

const ListSkillsR = styled.div`
  
  img {
    width: 60px;
  height: 60px;
    z-index: 999;
    background: #333;
    margin: 10px;
    padding: 10px;
    animation-name: ${moverRight};
    animation-duration: 6s;
    border-radius: 30px;
    cursor: alias;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    box-shadow: -8px -6px 0 #2082d8;
  }
`;

const Ctn = styled.div`
  margin: 60px 0;
  text-align: center;
  h2 {
    display: inline-block;
    font-size: 2.6rem;
    margin-bottom: 30px;
    border-bottom: 2px solid #2082d8;
    cursor: alias;
  }
`;
