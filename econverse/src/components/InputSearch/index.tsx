import { Container, Input, SearchIcon } from "./styles";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function InputSearch({ ...props }: InputProps) {
  return (
    <Container>
      <Input {...props}/>
      <SearchIcon/>
    </Container>
  );
}
