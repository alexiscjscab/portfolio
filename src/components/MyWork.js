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
                
            </div>
        </div>
    )
}

export default MyWork






const useStyles = makeStyles((theme) => ({
    section:{
        
        minHeight: "100vh",
        backgroundColor: 'rgba(0,137,255,1)',
        background: 'linear-gradient(90deg, rgba(0,137,255,1) 0%, #00bdd0 50%, rgba(0,137,255,1) 100%)',
        
    },
    sectiondark:{
        background: '#ddd',
        color: '#fff'
    },
    sectionContent:{
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    ctn:{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
}))

const Project = styled.div`
   width: 800px;
   overflow: hidden;
   height: 300px;
   font-family: 'Josefin Sans', sans-serif;
   color: #000;
   height: 100%;
   cursor: alias;
   @media screen and (max-width:900px){
        width: 480px;
    }
    @media screen and (max-width:500px){
        width: 360px;
    }
    @media screen and (max-width:360px){
        width: 338px;
    }
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
       @media screen and (max-width:360px){
        margin: 10px;
        font-size: 34px;
    }
   }

`

