import styled from 'styled-components';

export const Form = styled.form`
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
    width: 140px;
    margin-right: 50px;
    @media screen and (max-width: 380px) {
      margin-right: 20px;
    }
    font-family: 'Josefin Sans', sans-serif;
  }

  .email input {
    width: 210px;
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
    outline: 0;
    resize: none;
    height: 210px;
    margin: 0 auto;
    width: 240px;
    background: rgba(155, 155, 155, 0.2);
    border: none;
    border-radius: 20px;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    padding: 5px;
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
    transition: all 0.3s ease-in-out;
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
    margin: 10px;
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

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  background: #000;
  color: #fff;
  margin: 0 auto;
  min-width: 100%;
  h3 {
    margin: 10px 0px;
    font-size: 20px;
    cursor: default;
    letter-spacing: 1px;
  }
  .social-icons {
    padding: 0.2rem;
    margin-top: 0.1rem;
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
      transition: all 0.3s ease-in-out;
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

export const ArrowUp = styled.div`
    position: sticky;
    bottom: 0;
    width: 1px;
    z-index: 11;
    padding: 5px;
    margin-bottom: 10px;
    margin-left: 4px;
  .up {
    color: #2082d8;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.111);
    }
  }
`;