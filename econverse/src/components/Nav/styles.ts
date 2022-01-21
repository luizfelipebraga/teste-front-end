import styled from "styled-components";
import { BsHandbag, BsPersonFill } from "react-icons/bs";

export const Header = styled.header`
  width: 100%;
  height: 100%;
`;

export const WrapTopContent = styled.div`
  background-color: #041e50;
  width: 100%;
  padding: 1rem 0;
`;

export const TopContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 0.8rem;
  }
`;

export const Bar = styled.div`
  display: inline-block;
  width: 1px;
  color: #fff;
  background: #fff;
  height: 1.5rem;
`;

export const MainContent = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;

  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    span {
      color: #041e50;
      &:first-child {
        margin-right: 0.3rem;
      }
    }
  }
`;

export const WrapMainContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 0 0 3rem;
`;

export const Logo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    font-size: clamp(1rem, 4vw, 2rem);
    text-transform: uppercase;
    color: #041e50;
    font-weight: bold;
  }
`;

export const MyAccount = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

export const PersonIcon = styled(BsPersonFill)`
  height: 2rem;
  width: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 0.1rem;
  flex-direction: column;

  span {
    &:first-child {
      text-transform: uppercase;
    }
  }
`;

export const BoxYourBuys = styled.div`
  width: 8rem;
  height: 10rem;
  background-color: #041e50;

  position: absolute;
  left: auto;
  top: 1rem;
  right: 1rem;

  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    &:not(:last-child) {
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    color: #fff !important;
  }
`;

export const WrapCategories = styled.footer`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  padding: 1rem 0 2rem 0;
`;

export const Categories = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;

  span {
    text-transform: uppercase;
    color: #041e50;
    cursor: pointer;
  }
`;

export const BagIcon = styled(BsHandbag)`
  height: 3rem;
  width: 3rem;

  color: #fff;
`;
