import { ReactNode } from "react";
import { ScrollStyled } from "../../global/styles";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { Container, Content } from "./styles";

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <ScrollStyled autoHide={true}>
        <Nav />
        <Content>{children}</Content>
        <Footer />
      </ScrollStyled>
    </Container>
  );
}
