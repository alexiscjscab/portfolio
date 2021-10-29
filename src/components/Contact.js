import React from 'react';
import {makeStyles} from '@material-ui/core';

import styled from 'styled-components';

import {icons} from './About';

import ScrollAnimation from 'react-animate-on-scroll'
// import {Link} from 'react-scroll'

import emailjs from "emailjs-com";
import swal from 'sweetalert'

const Contact = ({ id, dark}) => {
    const classes = useStyles();


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailPortafolio', 'template_alexis', e.target, 'user_PzunwnbRH3TpjOLmVu2mH')

        .then((result) => {
            swal({
                title:'Message Success👍',
                icon: 'success',
                button: 'ok',
                timer: '3000'
            });
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            e.target.reset()
        })
    } 

        
        


    



    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        
        <div className={classes.sectionContent}>
                <ScrollAnimation animateIn='bounceInUp'>
                    <div className={classes.ctn}>

                        <Form id={id} onSubmit={sendEmail}>

                            <div className='input'>
                                <label>Name</label>
                                <input type='text' name='name' required maxLength={50}/>
                            </div>

                            <div className='input email'>
                                <label>Email</label>
                                <input type='text'  name='email' required maxLength={70}/>
                            </div>

                            <div className='inputTextarea'>
                                <label>Message</label>
                                <textarea required name='message' placeholder=' Message...' maxLength={800}/>
                            </div>

                            <div className='send'>
                                <input type='submit' value='SEND' />
                            </div>
                        </Form>
                    </div>
                    
                    <Social>
    
                    {
                        icons.map(({icon, text,link},index) =>(
                                // eslint-disable-next-line react/jsx-no-target-blank
                                <a href={link} target="_blank" rel={text} key={index}>
                                    <span className='icon'>{icon}</span>
                                    <span> {text}</span>
                                </a>
                            ))
                    }
                
                    </Social>
                </ScrollAnimation>
            
            </div>
            
        </div>

    )
}

export default Contact




const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        backgroundColor: 'rgba(0,137,255,1)',
        background: 'linear-gradient(90deg, rgba(0,137,255,1) 0%, #00bdd0 50%, rgba(0,137,255,1) 100%)',
    },
    sectiondark: {
        color: "#2082d8",
        background: 'linear-gradient(90deg, rgba(218,215,197,1) 0%, rgba(236,237,237,1) 50%, rgba(218,215,197,1) 100%)'
    },
    sectionContent:{
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    ctn:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '60px'
    }
}))


const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
width: 400px;
margin: 30px auto;
@media screen and (max-width:380px){
        width: 350px;
        
    }

font-family: 'Josefin Sans', sans-serif;

    .input{
        display: flex;
        justify-content: space-between;
        margin: 10px;
        align-items: center;
        margin-top: 32px;
        @media screen and (max-width:380px){
        margin: 5px
        }
    }
    .input input{
        outline: 0;
        padding: 6px;
        background: transparent;
        border: 3px solid rgba(0, 0, 0, 0.3);
        box-shadow: 10px 6px 0 #00bdd0;
        color: #ffffff;
        border-radius: 50px;
        color: #000;
        font-size: 18px;
        font-weight:500;
        z-index: 9;
        width: 160px;
        margin-right: 50px;
        @media screen and (max-width:380px){
        margin-right: 20px
        }
        font-family: 'Josefin Sans', sans-serif;
    }

    .email input{
        width: 220px;
    }

    .input label{
        line-height: 40px;
        color: #000;
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 0 30px;
        display: block;
        pointer-events: none;
        z-index: 9;
    }

    .inputTextarea{
        margin: 10px;
        display: flex;
        flex-direction: column;
    }

    .inputTextarea textarea{
        overflow: hidden;
        outline: 0;
        resize: none;
        height: 240px;
        margin: 0 auto;
        width: 280px;
        /* background: rgba(32, 130, 216, 0.455); */
        background: rgba(155,155,155,0.2);
        border: none;
        border-radius:20px;
        text-align: left;
        font-size: 17px;
        font-weight: 300;
        padding: 9px;
        color: #000;
        border-radius: 30px;
        box-shadow: 15px 12px 0 #00bdd0;
        font-family: 'Josefin Sans', sans-serif;
        @media screen and (max-width:380px){
            width: 260px;
            box-shadow: 13px 9px 0 #00bdd0;
        }
    }
    .inputTextarea textarea::placeholder{
        color: #000;
        font-family: 'Josefin Sans', sans-serif;
    }

    .inputTextarea label{
        line-height: 40px;
        color: #000;
        font-size: 18px;
        display: block;
        text-align: center;
        pointer-events: none;
        font-weight: 500;
    }

    .send input{
        outline: 0;
        padding: 10px 5px 10px 5px;
        background: transparent;
        font-family: 'Josefin Sans', sans-serif;
        border: 3px solid rgba(0, 0, 0, 0.3);
        box-shadow: 8px 5px 0 #00bdd0;
        color: #ffffff;
        border-radius: 50px;
        color: #000;
        width: 100px;
        cursor: pointer;
        &:hover{
            color: #fff;
            background: #00bdd0;
            box-shadow: 8px 5px 0 rgba(10,10,10,0.5);
        }
    }


    .send{
        display: flex;
        justify-content:center;
        margin-top: 30px;
        font-weight:500;
        margin-bottom: 10%;
    }

`

const Social = styled.div`
    /* position:absolute; bottom:0; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    
    a{
        text-decoration: none;
        color: #000;
        font-size: 22px;
        margin: 5px;
    }

    a:hover{
        color: #00bdd0;
    }

    .icon{
        position: relative;
        top:5px;
    }

`

