import styled from 'styled-components';
import AudioProfiImg from "../../assets/audioProssional.jpg";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const Image = styled.div`
  background-image: url(${AudioProfiImg});
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  width: 100%;
  height: 35rem;
`;

export const DarkBackground = styled.div` 
  background: linear-gradient(180deg, rgba(77, 77, 77, 0) 2.66%, rgba(39, 39, 39, 0.7) 20.18%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 35rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;

  header {
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: .3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    &:after {
      content: "";
      width: 2rem;
      height: 1px;
      color: #fff;
      background: #fff;
      display: block;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: clamp(1.8rem, 4vw, 4rem);  
      font-weight: 300;
      color: #fff;
      letter-spacing: .3rem;
      &:first-child {
        font-size: clamp(1.8rem, 4vw, 4rem);  
        font-weight: 700;
        color: #fff;
      }
    }
  }

  a {
    background: transparent;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: .2rem;

    padding: 1.5rem 3.5rem;
    border: 1px solid #fff;
    font-size: .9rem;
    border-radius: 5px;

    cursor: pointer;

    transition: filter 200ms ease-in-out;

    &:hover {
      filter: brightness(.75);
    }
  }
`;