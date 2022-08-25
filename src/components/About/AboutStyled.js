import styled from 'styled-components';

export const Description = styled.div`
  width: 100%;
  margin-top: 2 rem;
  .contentOne {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    margin-top: 10px;
    cursor: default;
    .aboutMe {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 10px;
      background: transparent;
      transition: all 0.3s ease-in-out;
      margin-top: 5px;
      &:hover {
        transform: scale(1.1) translateY(-5px);
      }
      p {
        font-family: 'Josefin Sans', sans-serif;
        border-bottom: 1px solid #fff;
        letter-spacing: 1px;
        font-weight: 700;
        margin: 5px 0;
        text-shadow: 2px 2px 2px #000;
      }
      ul {
        list-style: none;
        color: rgba(210,210,210,1);
        margin: 2px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 800;
        text-align: center;
        text-shadow: 2px 2px 2px #000;
      }
    }

    .academic {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 5px;
      border-radius: 10px;
      background: transparent;
      transition: all 0.3s ease-in-out;
      margin-top: 5px;
      &:hover {
        transform: scale(1.1) translateY(-5px);
      }
      p {
        font-family: 'Josefin Sans', sans-serif;
        border-bottom: 1px solid #fff;
        letter-spacing: 1px;
        font-weight: 700;
        margin: 5px 0;
        text-shadow: 2px 2px 2px #000;
      }
      ul {
        list-style: none;
        color: rgba(210,210,210,1);
        margin: 2px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 800;
        text-align: center;
        text-shadow: 2px 2px 2px #000;
      }
    }
  }

  .contentTwo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 0;
    .hobbies {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 10px;
      background: transparent;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1) translateY(-5px);
      }
      p {
        font-family: 'Josefin Sans', sans-serif;
        border-bottom: 1px solid #fff;
        letter-spacing: 1px;
        font-weight: 700;
        margin: 5px 0;
        text-shadow: 2px 2px 2px #000;
      }
      ul {
        list-style: none;
        color: rgba(210,210,210,1);
        margin: 2px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 800;
        text-align: center;
        text-shadow: 2px 2px 2px #000;
      }
    }
  }
`;

export const CtnAbout = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  margin-top: 4rem;
  .imagen {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 20px;

    img {
      height: 260px;
      width: 260px;
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
    padding: 5px;
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