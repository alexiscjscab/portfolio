import React from 'react';
import { makeStyles } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import { CtnSkills, ListSkills } from './SkillsStyled';

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
    name: 'Typescript',
    img: 'https://img.icons8.com/color/2x/typescript.png'
  },
  {
    name: 'React',
    img: 'https://img.icons8.com/officel/344/react.png'
  },
  {
    name: 'Next',
    img: 'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png'
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
    name: 'MongoDB',
    img: 'https://img.icons8.com/color/344/mongodb.png'
  },
  {
    name: 'Git',
    img: 'https://img.icons8.com/color/2x/git.png'
  },
];

const Skills = ({ id, dark }) => {
  const classes = useStyles();
  return (
    <main className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <CtnSkills>
          <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
            <h2> Skills </h2>
          </ScrollAnimation>

          <div className='grid'>

          {skills.map(({ name, img }, index) =>
            <ListSkills key={name}>
              <img src={img} alt={name}/>
              <p>{name}</p>
            </ListSkills>
          )}
          </div>
        </CtnSkills>
      </div>
    </main>
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
    backgroundColor: '#ddd',
    backgroundSize: '100% 100%',
  }
}));


