import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{
  }
  to{
    transform: rotate(360deg)
  }
`;

const changeColors = keyframes`
  0% {
    color:#00adff;      
  }
  10% {
    color:#0d4cb6; 
  }
  20% {
    color: #1abc9c;
  }
  30% {
    color: #00a873;
  }
  40% {
    color: #e597e9 
  }
  50% {
    color: #8e44ad; ;
  }
  60% {
    color: #ffa3cf;
  }
  70% {
    color: #ff20c4;
  }
  80% {
    color: #fffa97;
  }
  90% {
    color: #fffa5e;
  }
  100% {
    color: #ffffff;
  }

`;

export const ListSkills = styled.div`
  img {
    width: 50px;
    height: 50px;
    animation-name: ${rotate};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    filter: grayscale(100%);
    margin: 1rem;
    transition: 0.3s all ease-in-out;
    &:hover{
      filter: grayscale(0%);
    }
  }
  p {
    letter-spacing: 1.2px;
    font-weight: 600;
    text-shadow: 2px 2px 3px #000000;
    font-family: 'Josefin Sans', sans-serif;
    animation: ${changeColors} 6s infinite alternate;
  }
`;

export const CtnSkills = styled.div`
  margin: 30px 0;
  text-align: center;
  h2 {
    display: inline-block;
    font-size: 2.6rem;
    margin-bottom: 30px;
    border-bottom: 2px solid #000;
    cursor: default;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 1.2rem;
    padding: 0.8rem;
    @media screen and (max-width: 400px) {
      grid-template-columns: repeat(2, minmax(70px, 1fr));
      grid-gap: 1rem;
    }
   }
`;
