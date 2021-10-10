import React from 'react';
import {
    makeStyles, 
} from '@material-ui/core';

import img from '../yo.jpeg';

import TypeWriterEffect from "react-typewriter-effect";

import styled from 'styled-components';

import {
    SiGithub,
    SiGmail,
    SiLinkedin
} from 'react-icons/si'

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
                            textStyle={{fontSize: '3.5rem', color: 'white',margin: '5px',fontFamily: "'Lobster', cursive",textShadow: '2px 3px #000'}}
                            startDelay={110}
                            cursorColor="white"
                            typeSpeed={130}     
                            hideCursorAfterText={true}
                        />
                        <TypeWriterEffect 
                            
                            textStyle={{fontSize: '2.5rem', color: 'white',marginTop:'10px',margin: '5px',fontFamily: "'Lobster', cursive",textShadow: '2px 3px #000'}}
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
                        
                    </div>
                </div>
                {/* { bandera &&    */}
                
             <Description> 

                    <TypeWriterEffect 
                                text="I am someone creative, curious and I aim to improve myself every day"
                                textStyle={{fontSize: '1.8rem', color: '#000',margin: '5px',fontFamily: "'Josefin Sans', sans-serif",textShadow: '2.5px 1px #fff', textAlign: 'center'}}
                                startDelay={11000}
                                cursorColor="white"
                                typeSpeed={130}     
                                hideCursorAfterText={true}
                    />
                    
        
            </Description>

            
            </div>
            <Wawe>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg></Wawe>
            
        </div>
    )
}

export default About


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
background: 'linear-gradient(90deg, rgba(0,137,255,1) 0%, rgba(168,212,255,1) 50%, rgba(0,137,255,1) 100%)',
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




