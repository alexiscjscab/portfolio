import styled from 'styled-components';

export const Description = styled.div`
  text-align: center;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  transition: 0.3s all ease-in-out;
  cursor: default;
  &:hover{
    transform: scale(1.1);
    background: rgba(230,230,230,0.2);
    border-radius: 10px;
  }
  a {
    font-weight: 800;
    text-decoration: none;
    color: #000;
    letter-spacing: 1px;
    transition: 0.3s all ease-in-out;
    margin: 4px;
    &:hover{
      color: #00f;
    }
  }

  .redes-sociales{
    padding: 0.5rem;
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    a {
      text-decoration: none;
      color: #000;
      margin: 0 5px;
      transition: all 0.3s ease-in-out;
      &:hover{
        color: #00f;
      }
    }
  }
`;

export const CtnAbout = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
  margin-top: 4rem;
  .imagen {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 220px;
      width: 220px;
      border-radius: 50%;
      filter: sepia(10%);
    }
  }
  .content {
    text-align: center;
    width: 360px;
    margin: 10px;
    padding: 10px;
    text-align: center;
  }
`;

export const Cv = styled.div`
  margin-top: 15px;
  a {
    text-decoration: none;
    color: #000;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 2.5px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #fff;
      background: rgba(0, 0, 0, 1);
      transform: scale(1.1);
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;