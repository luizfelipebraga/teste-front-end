import styled from "styled-components";
import Guitarra from '../../assets/guitarraVerde.jpg';


export const Container = styled.div`
  width: 100%;
  background: #f9f9f9;

  .glider-prev,
  .glider-next {
    top: 75px;
  }

  .glider-prev {
    left: -30px;
  }

  .glider-next {
    right: -30px;
  }

  .glider {
    height: 450px;
  }
  .glider-contain {
    margin-bottom: 25px;
  }
  .glider-dots {
    margin-top: 15px;
  }
  .glider-track {
    height: 100%;
  }
  .glider-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f5f5f5;
  }

  .slide {
    background-color: #05272d;
    color: darkgreen;
    font-size: 3em;
    font-weight: bold;
  }
`;

export const Box = styled.div`
  background-color: #05272d;
  color: darkgreen;
  font-size: 3em;
  font-weight: bold;
`;

export const Image = styled.div`
  background-image: url(${Guitarra});
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  height: 100%;
  width: 100%;
`;

export const DarkBackground = styled.div` 
  background: linear-gradient(180deg, rgba(77, 77, 77, 0) 2.66%, #05272da6 20.18%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span  {
    color: #fff;
    font-weight: 300;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 4vw, 4rem);
    &:first-child {
      font-weight: 700;
    }
  }
`;