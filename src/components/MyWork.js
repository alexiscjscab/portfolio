import React from 'react';
import styled from 'styled-components';
import {
    makeStyles, 
} from '@material-ui/core';
// import SlideCommerce from './imgProject/SlideCommerce';
import Slide from './imgProject/Slide';

import img1 from './imgProject/dogs/1.png'
import img2 from './imgProject/dogs/2.png'
import img3 from './imgProject/dogs/3.png'
import img4 from './imgProject/dogs/4.png'
import img5 from './imgProject/dogs/5.png'
import img6 from './imgProject/dogs/6.png'
import img7 from './imgProject/dogs/7.png'

import imgE1 from './imgProject/ecommerce/1.png'
import imgE2 from './imgProject/ecommerce/2.png'
import imgE3 from './imgProject/ecommerce/3.png'
import imgE4 from './imgProject/ecommerce/4.png'
import imgE6 from './imgProject/ecommerce/6.png'
import imgE7 from './imgProject/ecommerce/7.png'


import imgR1 from './imgProject/rick/1Rick.png'
import imgR2 from './imgProject/rick/2Rick.png'
import imgR3 from './imgProject/rick/3Rick.png'


import imgW1 from './imgProject/clima/imgW1.png'
import imgW2 from './imgProject/clima/imgW2.png'
import imgW3 from './imgProject/clima/imgW3.png'
import imgW4 from './imgProject/clima/imgW4.png'



import imgP1 from './imgProject/poke/imgP1.png'
import imgP2 from './imgProject/poke/imgP2.png'
import imgP3 from './imgProject/poke/imgP3.png'
import imgP4 from './imgProject/poke/imgP4.png'
import imgP5 from './imgProject/poke/imgP5.png'
import imgP6 from './imgProject/poke/imgP6.png'


const imgP =[
    {
        img: imgP1,
        id: 'imgP1',
        link: 'https://pokedexreactalexiscjscab.netlify.app/'
    },
    {
        img: imgP2,
        id: 'imgP2',
        link: 'https://pokedexreactalexiscjscab.netlify.app/'
    },
    {
        img: imgP3,
        id: 'imgP3',
        link: 'https://pokedexreactalexiscjscab.netlify.app/'
    },
    {
        img: imgP4,
        id: 'imgP4',
        link: 'https://pokedexreactalexiscjscab.netlify.app/'
    },
    {
        img: imgP5,
        id: 'imgP5',
        link: 'https://pokedexreactalexiscjscab.netlify.app/'
    },
    {
        img: imgP6,
        id: 'imgP6',
        link: 'https://pokedexreactalexiscjscab.netlify.app/'
    },

]



const imgW = [
    {
        img: imgW1,
        id: 'imgW1',
        link: 'https://reactappweatheralexis.netlify.app/'
    },
    {
        img: imgW2,
        id: 'imgW2',
        link: 'https://reactappweatheralexis.netlify.app/'
    },
    {
        img: imgW3,
        id: 'imgW3',
        link: 'https://reactappweatheralexis.netlify.app/'
    },
    {
        img: imgW4,
        id: 'imgW4',
        link: 'https://reactappweatheralexis.netlify.app/'
    }
]


const imgR = [
    {
        img: imgR1,
        id: 'imgR1',
        link:'https://github.com/alexiscjscab/rickandmorty'
    },
    {
        img: imgR2,
        id: 'imgR2',
        link:'https://github.com/alexiscjscab/rickandmorty'
    },
    {
        img: imgR3,
        id: 'imgR3',
        link:'https://github.com/alexiscjscab/rickandmorty'
    }
]


const imgE = [
    {
        img: imgE1,
        id: 'img1',
        link: 'https://github.com/tomasellis/henry-ecommerce'
    },
    {
        img: imgE2,
        id: 'img2',
        link: 'https://github.com/tomasellis/henry-ecommerce'
    },
    {
        img: imgE3,
        id: 'img3',
        link: 'https://github.com/tomasellis/henry-ecommerce'
    },
    {
        img: imgE4,
        id: 'img4',
        link: 'https://github.com/tomasellis/henry-ecommerce'
    },
    
    {
        img: imgE6,
        id: 'img6',
        link: 'https://github.com/tomasellis/henry-ecommerce'
    },
    {
        img: imgE7,
        id: 'img7',
        link: 'https://github.com/tomasellis/henry-ecommerce'
    }
]


const imgDog = [
    {
        img: img1,
        id: 'img1',
        link: 'https://github.com/alexiscjscab/PI-Dogs-FT15a'
    },
    {
        img: img2,
        id: 'img2',
        link: 'https://github.com/alexiscjscab/PI-Dogs-FT15a'
    },
    {
        img: img3,
        id: 'img3',
        link: 'https://github.com/alexiscjscab/PI-Dogs-FT15a'
    },
    {
        img: img4,
        id: 'img4',
        link: 'https://github.com/alexiscjscab/PI-Dogs-FT15a'
    },
    {
        img: img5,
        id: 'img5',
        link: 'https://github.com/alexiscjscab/PI-Dogs-FT15a'
    },
    {
        img: img6,
        id: 'img6',
        link: 'https://github.com/alexiscjscab/PI-Dogs-FT15a'
    },
    {
        img: img7,
        id: 'img7',
        link: 'https://github.com/alexiscjscab/PI-Dogs-FT15a'
    }

]




const MyWork = ({ id, dark}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            
        <div className={classes.sectionContent}>
        <Wawe>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
            </Wawe>
                <div className={classes.ctn}>
                   <Project id={id}>
                        <h3>Projects</h3>
                        <div>
                            <a href='https://github.com/tomasellis/henry-ecommerce' target='_black'> <h1>App Dogs </h1> </a>
                            <Slide  img={imgDog} type={'Full Stack'}/>
                            

                            <a href='https://github.com/alexiscjscab/PI-Dogs-FT15a' target='_black'> <h1>Cute Clothes </h1> </a>
                            <Slide  img={imgE} type={'Front End (E-Commerce)'}/>
                            
                            <a href='https://github.com/alexiscjscab/rickandmorty' target='_black'> <h1>Rick And Morty </h1> </a>
                            <Slide img={imgR} type={'HTML/ CSS/ JAVASCRIPT'}/>

                            <a href='https://github.com/alexiscjscab/weatherReact' target='_black'> <h1>Weather App </h1> </a>
                            <Slide img={imgW} type={'REACT/ STYLED-COMPONENTS'}/>

                            <a href='https://github.com/alexiscjscab/Pokedex-React' target='_black'> <h1>Pokedex </h1> </a>
                            <Slide img={imgP} type={'REACT/ STYLED-COMPONENTS'}/>

                            
                            
                        </div>
                       
                      
                   </Project>

                </div>
                <Wawe1>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
    </Wawe1>
            </div>
        </div>
    )
}

export default MyWork

const Wawe1 = styled.div`
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
    transform: rotateY(180deg);
}
.shape-fill {
    fill: #ffffff;
}
`

const    Wawe = styled.div`
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
    fill: #FFFFFF;
}

`

const useStyles = makeStyles((theme) => ({
    section:{
        
        minHeight: "100vh",
        backgroundColor: 'rgba(0,137,255,1)',
        background: 'linear-gradient(90deg, rgba(0,137,255,1) 0%, #00bdd0 50%, rgba(0,137,255,1) 100%)',
        width: '100%',
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
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 99
    }
}))

const Project = styled.div`
   width: 320px;
   overflow: hidden;
   height: 100px;
   font-family: 'Josefin Sans', sans-serif;
   color: #000;
   height: 100%;
   cursor: alias;
   a{
       text-decoration: none;
       color: #fff;
       &:hover{
           color: #000
       }
   }
   
   
   h3{
       margin: 30px;
       font-size: 40px;
       border-bottom: 2px solid #000;  
       display: inline-block; 
   }

`

