import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import swal from 'sweetalert';
import ScrollAnimation from 'react-animate-on-scroll';
import { icons } from '../../array/index';
import emailjs from 'emailjs-com';
import { BiUpArrowCircle } from 'react-icons/bi';
import { Link } from 'react-scroll';
import Animated from '../../assets/background/Animated.svg';
import { ArrowUp, Form, Footer } from './ContactStyled';

const Contact = ({ id, dark }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [year, setYear] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    setInterval(() => {
      const dateObj = new Date();
      setYear(dateObj.getFullYear());
      setHours(dateObj.getHours());
      setMinutes(dateObj.getMinutes());
      setSeconds(dateObj.getSeconds())
    }, 1000);
  }, []);

  async function sendEmail(e) {
    e.preventDefault();

    if (email === '' || message === '' || name === '') {
      swal({
        title: 'Error',
        icon: 'error',
        text: 'Please fill out all fields.',
        button: 'ok',
        timer: '3000',
      });
    } else {
      // eslint-disable-next-line no-useless-escape
      let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (email.match(validRegex)) {
        await emailjs
          .sendForm(
            'gmailPortafolio',
            'template_alexis',
            e.target,
            'user_PzunwnbRH3TpjOLmVu2mH'
          )

          .then((result) => {
            swal({
              title: 'Message Success👍',
              icon: 'success',
              button: 'ok',
              timer: '3000',
            });
          })
          .catch((err) => {
            swal({
              title: 'Error',
              icon: 'error',
              text: 'Please try again later.',
              button: 'ok',
              timer: '3000',
            });
          })
          .finally(() => {
            setTimeout(() => {
              setName('');
              setEmail('');
              setMessage('');
            }, 1500);
          });
      } else {
        swal({
          title: 'Error',
          icon: 'error',
          text: 'Please enter a valid email.',
          button: 'ok',
          timer: '5000',
        });
      }
    }
  }

  return (
    <main className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent}>
        <div className={classes.ctn}>
          <Form onSubmit={sendEmail}>
            <ScrollAnimation animateIn='bounce'>
              <h3 id={id}>Contact</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInLeft' animateOut='fadeOutRight'>
              <div className='input'>
                <label>Name</label>
                <input
                  type='text'
                  name='name'
                  maxLength={50}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className='input email'>
                <label>Email</label>
                <input
                  type='text'
                  name='email'
                  maxLength={200}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className='inputTextarea'>
                <label>Message</label>
                <textarea
                  name='message'
                  placeholder=' Message...'
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>

              <div className='send'>
                <input type='submit' value='SEND' />
              </div>
            </ScrollAnimation>
          </Form>
        </div>

        <ArrowUp>
          <Link
            to={'about'}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <BiUpArrowCircle size={75} className='up' />
          </Link>
        </ArrowUp>

        <Footer>
          <h3>
            Alexis Beas Developer {year} - {hours < 10 ? `0${hours}` : hours }:{minutes < 10 ? `0${minutes}` : minutes }:{seconds < 10 ? `0${seconds}` : seconds}
          </h3>
          <div className='social-icons'>
            {icons.map(({ icon, text, link }, index) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a href={link} target='_blank' rel={text} key={index}>
                <div className='icon'>
                  <p>{icon}</p>
                  <span> {text} </span>
                </div>
              </a>
            ))}
          </div>
        </Footer>
      </div>
    </main>
  );
};

export default Contact;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    backgroundColor: 'rgba(0,137,255,1)',
    background:
      'linear-gradient(90deg, rgba(0,137,255,1) 0%, #00bdd0 50%, rgba(0,137,255,1) 100%)',
    position: 'relative',
  },
  sectiondark: {
    minHeight: '100vh',
    backgroundColor: '#ddd',
    background: 'url(' + Animated + ')',
    color: '#000',
    backgroundSize: '100% 100%',
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  ctn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));
