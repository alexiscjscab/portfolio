import React,{useState} from 'react';
import {
    makeStyles, 
} from '@material-ui/core';

import img from '../yo.jpeg';

import TypeWriterEffect from "react-typewriter-effect";

import styled,{keyframes} from 'styled-components';

import {
    SiGithub,
    SiGmail,
    SiLinkedin
} from 'react-icons/si'

import cv from '../cv/cv.pdf'

// iconos
export const icons = [
    {
        icon: <SiGithub size={30}/>,
        text: 'alexiscjscab',
        link: 'https://github.com/alexiscjscab'
    },
    {
        icon: <SiLinkedin size={30}/>,
        text: 'alexis-beas-dev',
        link: 'https://www.linkedin.com/in/alexis-beas-dev/'
    },
    {
        icon: <SiGmail size={30}/>,
        text: 'alexiscjscab@gmail.com',
        link: 'mailto:alexiscjscab@gmail.com'
    },
]

const About = ({ id, dark}) => {

    const [cvTime,setCvTime] = useState(false);

    setTimeout(() => {
        setCvTime(true)
    },11500)

    

    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
         
            <div className={classes.sectionContent} id={id}>
                
                <div className={classes.ctn}>
                

               

                    <div className={classes.media}>
                        <img src={img} alt=''/>
                    </div>
                    <div className={classes.content}>       
                        <TypeWriterEffect 
                            text="Hi, I'm Alexis Beas"
                            textStyle={{fontSize: '3rem', color: 'white',margin: '5px',fontFamily: "'Lobster', cursive",textShadow: '2px 3px #000'}}
                            startDelay={110}
                            cursorColor="white"
                            typeSpeed={130}     
                            hideCursorAfterText={true}
                        />
                        <TypeWriterEffect 
                            
                            textStyle={{fontSize: '2.5rem', color: 'white',marginTop:'10px',margin: '5px',fontFamily: "'Lobster', cursive",textShadow: '2px 3px #000',marginBottom: '20px'}}
                            startDelay={3500}
                            cursorColor="white"
                            typeSpeed={130}
                            multiText={[
                                "Front",
                                "Back",
                                "Full Stack Developer :)"
                            ]}
                            multiTextDelay={1000}
                            hideCursorAfterText={true}
                        />
                        {
                            cvTime &&
                            <Cv>
                                <p>
                                    <a href={cv} download>
                                        Download CV
                                    </a>
                                </p>
                            </Cv>
                        }
                    </div>
                    
                </div>
                {/* { bandera &&    */}
                
             <Description> 

                    <TypeWriterEffect 
                                text="I got to know web programming in early 2021 and decided to do the Henry bootcamp (+800hs) where I discovered my passion for code. I am someone creative, curious and always eager to learn new technologies."
                                textStyle={{fontSize: '1.8rem', color: '#000',margin: '5px',fontFamily: "'Josefin Sans', sans-serif",textShadow: '2px 1px #fff', textAlign: 'center'}}
                                startDelay={11000}
                                cursorColor="white"
                                typeSpeed={130}     
                                hideCursorAfterText={true}
                    />
                    
        
            </Description>

            
            </div>
            <Wawe>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg></Wawe>
            
        </div>
    )
}

export default About

const cvAnimation = keyframes`
    from{
        margin-right: 20%
    }
    to{
        margin-rigth: 0%
    }
    `

const Cv = styled.div`
animation-name: ${cvAnimation};
animation-duration: 2s; 
a{
        text-decoration: none;
        color: #000;
        font-family: 'Lobster', cursive;
        font-size: 2.2rem;
        text-shadow: 2px 3px #fff;
        &:hover{
           color:#fff;
           text-shadow: 2px 3px #000;
           border-bottom: 2px solid #fff
        }
    }
`


const Wawe = styled.div`
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
    fill: #FFFFFF;
}
`


const useStyles = makeStyles((theme) => ({
    section:{
        minHeight: '100vh',
        backgroundColor: 'rgba(0,137,255,1)',
background: 'linear-gradient(90deg, rgba(0,137,255,1) 0%, #00bdd0 50%, rgba(0,137,255,1) 100%)',
        color: '#fff',
        position: 'relative'
    },
    sectiondark:{
        background: '#ddd',
        color: '#fff'
    },
    sectionContent:{
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxwidth: '80vw',
    },
    ctn:{
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '5px auto',
        [theme.breakpoints.down('sm')] : {
        },
    },
    media:{
        marginTop: '30px',
        width: '280px',
        height: '280px',
        [theme.breakpoints.down('sm')] : {
            display: 'none'
        },
        background: 'rgb(30,30,30)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        zIndex: 999,
        '& img':{
            width: '96%',
            height: '96%',
            borderRadius: '50%',
            objectFit: 'contains',
            
        }
    },
    content:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        marginTop: '30px',
    }
}));



const Description = styled.div`
    margin: 20px auto;
    width: 300px;
    z-index: 99;

`




