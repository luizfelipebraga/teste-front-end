import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1300px;
  margin: 0 auto;

  padding: 0 2rem;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-direction: column;

  margin: 5rem 0;

  h1 {
    font-weight: 500;
    color: #041e50;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 4vw, 1.8rem);
    letter-spacing: 0.2rem;
    strong {
      margin-left: 2rem;
      font-weight: 700;
      color: #041e50;
    }
  }

  p {
    letter-spacing: 0.1rem;
    font-size: 1rem;
    color: #222222;
    font-weight: 400px;
  }
`;

export const Grid = styled.div`
  list-style: none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  position: relative;

  padding: 2rem 0;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;

    img {
      transform: translateY(-12px);
    }

    div {
      &:not(:last-child) {
        display: flex;
        transition: display 200ms ease-in-out;
      }
    }
  }
`;

export const Image = styled.img`
  transition: all 200ms ease-in-out;
  height: 12rem;
  object-fit: cover;
`;

export const WrapSearchIcon = styled.div`
  cursor: pointer;
  display: none;
  transition: all 200ms ease-in-out;

  color: #fff;
  background: #041e50;

  border-radius: 50%;
  padding: 0.5rem;
  top: 13.5rem;
  position: absolute;
`;

export const SearchIcon = styled(BsSearch)`
  color: #fff;
  transition: all 200ms ease-in-out;
  height: 1.5rem;
  width: 1.5rem;
`;

export const TitleCard = styled.span`
  color: #041e50;
  font-size: 1.3rem;
  font-weight: 700;

  margin-top: 2rem;
`;

export const Description = styled.p`
  max-width: 17rem;
  font-weight: 300;
  color: #041e50;
  text-align: center;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  span {
    color: #041e50;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const BoxCloseIcon = styled.div`
  width: 100%;
  text-align: right;
`;

export const ContentModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageProduct = styled.img`
  height: 15rem;
`;

export const InfosModal = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  h2 {
    color: #041e50;
    letter-spacing: 0.2rem;
    font-weight: 500;
  }
`;

export const PriceProduct = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #041e50;
`;

export const DescriptionProduct = styled.div`
  font-size: 1rem;
  color: #222222;
`;

export const DetailsProduct = styled.a`
  text-decoration: underline;
  color: #041e50;
`;

export const ModalButton = styled.a`
  background: #041e50;
  text-align: center;
  color: #fff;
  font-weight: 700;
  padding: 1rem;
  width: 15rem;
  border-radius: 5px;

  transition: filter 100ms ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
