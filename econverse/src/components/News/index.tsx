import { Container, Image, Box, DarkBackground } from "./styles";

export function NewsSection() {
  return (
    <Container>
      <Image>
        <DarkBackground>
          <Box>
            <header>Novidades</header>
            <main>
              <span>Áudio</span>
              <span>Profissional</span>
            </main>
            <a href="/">Confira</a>
          </Box>
        </DarkBackground>
      </Image>

      <Image>
        <DarkBackground>
          <Box>
            <header>Novidades</header>
            <main>
              <span>Instrumentos</span>
              <span>Musicais</span>
            </main>
            <a href="/">Confira</a>
          </Box>
        </DarkBackground>
      </Image>
    </Container>
  );
}
