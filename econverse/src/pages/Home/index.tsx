import { AboutSection } from "../../components/About";
import { CategorySection } from "../../components/Category";
import { NewsSection } from "../../components/News";
import { ProductSection } from "../../components/Product";
import { Slider } from "../../components/Slider";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Slider />
      <CategorySection />
      <NewsSection />
      <ProductSection />
      <AboutSection/>
    </Container>
  );
}
