import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

const icon = 'https://i.pinimg.com/736x/86/be/c9/86bec99182c25bb04dba91fd0f89491d.jpg';

const Loader = () => {
  return (
    <Spinner>
      <Typewriter
        loop
        cursor
        cursorStyle='.'
        typeSpeed={80}
        deleteSpeed={70}
        words={['Loading', 'Loading',]}
      />
      <img src={icon} alt='Belgrano de Cordoba' />
    </Spinner>
  );
};

export default Loader;


const rotate = keyframes`
  from{
  }
  to{
    transform: rotate(360deg)
  }
`;

const Spinner = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 1);
  text-align: center;
  color: rgba(250,250,250,1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 1.5px;

  img {
    padding: 1.5rem;
    margin: 1rem;
    height: 100px;
    width: 100px;
    animation-name: ${rotate};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
`;
