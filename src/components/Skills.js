import React from 'react';
import { makeStyles } from '@material-ui/core';

import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const skills = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'SASS',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'React',
  },
  {
    name: 'Redux',
  },
  {
    name: 'Node',
  },
  {
    name: 'Express',
  },
  {
    name: 'Postgres',
  },
  {
    name: 'MySQL',
  },
  {
    name: 'Sequelize',
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

          {skills.map(({ name }, index) =>
            index % 2 === 0 ? (
              <ListSkillsL key={name}>
                <h3>{name}</h3>
              </ListSkillsL>
            ) : (
              <ListSkillsR key={name}>
                <h3>{name}</h3>
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
  from{margin-left: 50%;background: transparent;color:#2082d8}
  to{margin-left: 0%; background: #2082d8 ;color: black}
`;

const moverLeft = keyframes`
  from{margin-right: 50%; background: transparent;color: black}
  to{margin-right: 0%; background: black;color:#2082d8}
`;

const ListSkillsL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  
  h3 {
    animation-name: ${moverLeft};
    animation-duration: 6s;
    background: black;
    margin: 10px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 20px;
    transition: 2;
    cursor: alias;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    box-shadow: 10px 6px 0 rgba(130, 130, 130, 0.666);
  }
`;

const ListSkillsR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  h3 {
    z-index: 999;
    background: white;
    margin: 10px;
    font-size: 1.2rem;
    padding: 10px;
    animation-name: ${moverRight};
    animation-duration: 6s;
    border-radius: 20px;
    cursor: alias;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    box-shadow: 10px 6px 0 rgba(130, 130, 130, 0.666);
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
