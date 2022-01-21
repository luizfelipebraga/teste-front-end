import { Container, Box, Image, DarkBackground } from "./styles";
import Glider from "react-glider";
import "glider-js/glider.min.css";

export function Slider() {
  return (
    <Container>
      <Glider slidesToShow={1} hasArrows scrollLock hasDots>
        <Box>
          <Image>
          <DarkBackground>
            <span>Instrumentos</span>
            <span>Profissionais</span>
          </DarkBackground>
          </Image>
        </Box>
        <div className="slide">2</div>
        <div className="slide">3</div>
        <div className="slide">4</div>
        <div className="slide">5</div>
        <div className="slide">6</div>
        <div className="slide">7</div>
        <div className="slide">8</div>
        <div className="slide">9</div>
        <div className="slide">10</div>
        <div className="slide">11</div>
        <div className="slide">12</div>
      </Glider>
    </Container>
  );
}
