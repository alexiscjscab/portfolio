import React from 'react';
import {makeStyles} from '@material-ui/core';


import styled, {keyframes} from 'styled-components';

const skills = [
    {
        name: 'HTML'
    },{
        name: 'CSS'
    }
    ,
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
    {name: 'Express'},
    {
        name: 'Postgres',
    },
    {name: 'Sequelize'},

    
]


const Skills = ({ id, dark}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}` }  >
            
            
            <div className={classes.sectionContent}  >
            <Wawe>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    </Wawe>
                <div className={classes.ctn} id={id}>
                
                    <Ctn>
                        {
                            skills.map( ({name, icon},index) => (
                                index % 2 === 0 ?
                                <ListSkillsL key={name}>
                                    <h3 >{name}</h3>
                                    
                                </ListSkillsL>:
                                <ListSkillsR key={name}>
                                    <h3 >{name}</h3>
                                    
                                </ListSkillsR>
                            ))
                        }
                    </Ctn>
                </div>
            
                
               
        </div>
            <Wawe1>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </Wawe1>
        </div>
    )
}

export default Skills;

const Wawe1 =styled.div`
position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    svg {
        position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}
.shape-fill {
    fill: #ffffff;
}
`

const Wawe = styled.div`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg {
        position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}
.shape-fill {
    fill: #00bdd0;}
`

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        backgroundColor: "#2082d8",
        width: '100%',
        position: 'relative'
        

    },
    sectiondark: {
        color: "#2082d8",
        background: 'linear-gradient(90deg, rgba(218,215,197,1) 0%, rgba(236,237,237,1) 50%, rgba(218,215,197,1) 100%)'
    },
    sectionContent:{
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxwidth: '80vw',
    },
    ctn:{
        marginTop :'20px',
        zIndex: 999
    }
}))

const moverRight = keyframes`
    from{margin-left: 50%;background: transparent;color:#2082d8}
    to{margin-left: 0%; background: #2082d8 ;color: black}
`

const moverLeft = keyframes`
    from{margin-right: 50%; background: transparent;color: black}
    to{margin-right: 0%; background: black;color:#2082d8}
`


const ListSkillsL = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    font-family: 'Josefin Sans', sans-serif;
    h3{
        left: 40px;
        position: relative;
        animation-name: ${moverLeft};
        animation-duration: 6s;
        background: black;
        margin: 10px;
        font-size: 1.2rem;
        padding: 10px;
        border-radius:20px;
        transition: 2;
        cursor: alias;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        box-shadow: 10px 6px 0 rgba(130, 130, 130, 0.666);
    }
`

const ListSkillsR = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    font-family: 'Josefin Sans', sans-serif;
    h3{
        z-index: 999;
        right: 40px;
        background: white;
        margin: 10px;
        font-size: 1.2rem;
        padding: 10px ;
        animation-name: ${moverRight};
        animation-duration: 6s;   
        border-radius:20px;
        cursor: alias;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        box-shadow: 10px 6px 0 rgba(130, 130, 130, 0.666);
    }
` 






const Ctn = styled.div`
   
`