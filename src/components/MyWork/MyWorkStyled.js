import styled from 'styled-components';

export const Project = styled.div`
  width: 500px;
  overflow: hidden;
  font-family: "Josefin Sans", sans-serif;
  color: #000;
  height: 100%;
  cursor: default;
  @media screen and (max-width: 900px) {
    width: 480px;
  }
  @media screen and (max-width: 500px) {
    width: 360px;
  }
  @media screen and (max-width: 360px) {
    width: 338px;
  }

  h3 {
    margin: 25px;
    font-size: 40px;
    color: #fff;
    border-bottom: 2px solid #fff;
    display: inline-block;
    @media screen and (max-width: 360px) {
      margin: 10px;
      font-size: 34px;
    }
  }
`;
