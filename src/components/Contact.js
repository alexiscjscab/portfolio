import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import swal from 'sweetalert';
import ScrollAnimation from 'react-animate-on-scroll';
import { icons } from './About';
import emailjs from 'emailjs-com';
import { BiUpArrowCircle } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Contact = ({ id, dark }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
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
                  maxLength={800}
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
              <BiUpArrowCircle size={75} className='up'/>
          </Link>
        </ArrowUp>
        

        <Social>
          <h3>Alexis Beas Developer </h3>
          
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
        </Social>
        
      </div>
    </div>
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
    backgroundColor: 'rgba(0,137,255,1)',
    background:
      `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1042%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(231%2c 243%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M435.66185175199377 14.619343659422995L337.75373242109083 39.030579514328856 362.16496827599667 136.93869884523178 460.0730876068996 112.52746299032594z' fill='rgba(89%2c 89%2c 89%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1034.98 279.65 a111.46 111.46 0 1 0 222.92 0 a111.46 111.46 0 1 0 -222.92 0z' fill='rgba(89%2c 89%2c 89%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1248.597%2c552.313C1283.269%2c551.42%2c1309.003%2c524.253%2c1326.398%2c494.247C1343.861%2c464.124%2c1355.566%2c427.775%2c1338.331%2c397.521C1320.968%2c367.042%2c1283.672%2c357.332%2c1248.597%2c357.675C1214.233%2c358.011%2c1179.626%2c369.834%2c1161.852%2c399.247C1143.521%2c429.582%2c1146.06%2c467.604%2c1163.535%2c498.44C1181.271%2c529.736%2c1212.637%2c553.239%2c1248.597%2c552.313' fill='rgba(89%2c 89%2c 89%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M387.3806709869692 449.8140031329142L363.8129258935286 347.2851853365323 295.47060785294275 408.82088489696514z' fill='rgba(89%2c 89%2c 89%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M201.65856580886575 198.68938597353286L80.26489702459584 170.66344924721275 52.23896029827574 292.0571180314827 173.63262908254563 320.08305475780276z' fill='rgba(89%2c 89%2c 89%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M880.075%2c434.386C906.447%2c432.347%2c923.014%2c409.221%2c936.528%2c386.483C950.478%2c363.013%2c965.812%2c335.901%2c952.911%2c311.838C939.571%2c286.957%2c908.3%2c280.575%2c880.075%2c281.19C853.114%2c281.778%2c827.085%2c292.19%2c812.538%2c314.897C796.752%2c339.538%2c791.766%2c371.085%2c806.166%2c396.561C820.761%2c422.384%2c850.501%2c436.672%2c880.075%2c434.386' fill='rgba(89%2c 89%2c 89%2c 1)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1042'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");`,
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
    marginTop: '60px',
  },
}));

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin: 30px auto;
  text-align: center;
  @media screen and (max-width: 380px) {
    width: 350px;
  }

  font-family: 'Josefin Sans', sans-serif;

  .input {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    align-items: center;
    margin-top: 32px;
    @media screen and (max-width: 380px) {
      margin: 5px;
    }
  }
  .input input {
    outline: 0;
    padding: 6px;
    background: transparent;
    border: 3px solid rgba(0, 0, 0, 0.3);
    box-shadow: 10px 6px 0 #2082d8;
    color: #ffffff;
    border-radius: 50px;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    z-index: 9;
    width: 160px;
    margin-right: 50px;
    @media screen and (max-width: 380px) {
      margin-right: 20px;
    }
    font-family: 'Josefin Sans', sans-serif;
  }

  .email input {
    width: 220px;
  }

  .input label {
    line-height: 40px;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 0 30px;
    display: block;
    pointer-events: none;
    z-index: 9;
  }

  .inputTextarea {
    margin: 10px;
    display: flex;
    flex-direction: column;
  }

  .inputTextarea textarea {
    overflow: hidden;
    outline: 0;
    resize: none;
    height: 240px;
    margin: 0 auto;
    width: 280px;
    /* background: rgba(32, 130, 216, 0.455); */
    background: rgba(155, 155, 155, 0.2);
    border: none;
    border-radius: 20px;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    padding: 9px;
    color: #000;
    border-radius: 30px;
    box-shadow: 15px 12px 0 #2082d8;
    font-family: 'Josefin Sans', sans-serif;
    @media screen and (max-width: 380px) {
      width: 260px;
      box-shadow: 13px 9px 0 #2082d8;
    }
  }
  .inputTextarea textarea::placeholder {
    color: #000;
    font-family: 'Josefin Sans', sans-serif;
  }

  .inputTextarea label {
    line-height: 40px;
    color: #000;
    font-size: 18px;
    display: block;
    text-align: center;
    pointer-events: none;
    font-weight: 500;
  }

  .send input {
    outline: 0;
    padding: 10px 5px 10px 5px;
    background: transparent;
    font-family: 'Josefin Sans', sans-serif;
    border: 3px solid rgba(0, 0, 0, 0.3);
    box-shadow: 8px 5px 0 #2082d8;
    color: #ffffff;
    border-radius: 50px;
    color: #000;
    width: 100px;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #2082d8;
      box-shadow: 8px 5px 0 rgba(10, 10, 10, 1);
    }
  }

  .send {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-weight: 500;
    margin-bottom: 10%;
  }

  h3 {
    margin: 30px;
    font-size: 40px;
    border-bottom: 2px solid #000;
    display: inline-block;
    text-align: center;
    @media screen and (max-width: 360px) {
      margin: 10px;
      font-size: 34px;
    }
    cursor: default;
  }
`;

const Social = styled.div`
  position: absolute;
  bottom: 0;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  background: #000;
  color: #fff;
  padding: 5px;
  min-width: 100vw;
  margin: 0 auto;
  h3 {
    margin: 10px 0px;
    font-size: 24px;
    cursor: default;
  }
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      margin: 0 5px;

      &:hover {
        color: #2082d8;
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 18px;
        margin: 0 5px;
      }
    }
  }
`;

const ArrowUp = styled.div`
    position: sticky;
    bottom: 0;
    width: 1px;
    z-index: 11;
  .up {
    color: #2082d8;
    cursor: pointer;
    &:hover {
      transform: scale(1.111);
    }
  }
`;
