import BateriaImg from '../../assets/bateria.png';
import GuitarraImg from '../../assets/guitarra.png';
import MesaDeSomImg from '../../assets/mesa-de-som.png';
import MicrofoneImg from '../../assets/microfone.png';
import TecladoImg from '../../assets/teclado.png';
import ViolaoImg from '../../assets/violaoo.png';
import { CategoryCard, Container, Image, Title } from './styles';

type CategoryProps = {
  img: string;
  alt: string;
  name: string;
};

export function CategorySection() {
  const category: CategoryProps[] = [
    {
      img: GuitarraImg,
      alt: "Imagem de uma guitarra",
      name: "Guitarras",
    },

    {
      img: MicrofoneImg,
      alt: "Imagem de um microfone",
      name: "Microfones",
    },

    {
      img: MesaDeSomImg,
      alt: "Imagem de uma mesa de som",
      name: "Mesas de Som",
    },

    {
      img: TecladoImg,
      alt: "Imagem de um teclado",
      name: "Teclados",
    },

    {
      img: ViolaoImg,
      alt: "Imagem de um violão",
      name: "Violão",
    },

    {
      img: BateriaImg,
      alt: "Imagem de uma bateria",
      name: "Baterias",
    },
  ];

  return (
    <Container>
      {category.map((c, index) => (
        <CategoryCard key={index}>
          <Image src={c.img} alt={c.alt} />
          <Title>{c.name}</Title>
        </CategoryCard>
      ))}
    </Container>
  );
}
