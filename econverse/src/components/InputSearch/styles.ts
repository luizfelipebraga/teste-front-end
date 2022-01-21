import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #707070;
  width: 40%;
`;

export const Input = styled.input`
  flex: 1;
  width: 80%;
  margin: 7px 0;
  padding: .5rem;
  font-size: 1rem;
  color: #000;
  background-color: transparent;
  border-radius: 4px;
  padding-left: 30px;
`;

export const SearchIcon = styled(BsSearch)`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;

