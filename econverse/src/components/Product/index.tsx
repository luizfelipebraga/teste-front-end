import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

import { products } from '../../services/data';
import {
  BoxCloseIcon,
  Card,
  Container,
  ContentModal,
  Description,
  Grid,
  Image,
  ImageProduct,
  InfosModal,
  ModalButton,
  Price,
  SearchIcon,
  Title,
  TitleCard,
  WrapSearchIcon,
  PriceProduct,
  DescriptionProduct,
  DetailsProduct,
} from './styles';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minHeight: "22rem",
    width: "60rem",
    padding: "2rem",
    borderRadio: "2rem",
  },
};

export function ProductSection() {
  let subtitle: any;
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  function openModal(productId: number) {
    const getProductById = products[productId];
    setProductName(getProductById.productName);
    setPrice(getProductById.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
    setPhoto(getProductById.photo);
    setDescription(getProductById.descriptionShort);
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Title>
        <h1>
          Instrumentos<strong>Destaque</strong>
        </h1>
        <p>
          it is a long established fact that a reader will be destracted by the
          readable
        </p>
      </Title>
      <Grid>
        {products.map((product, index) => {
          return (
            <Card key={index} onClick={() => openModal(index)}>
              <Image src={product.photo} alt={product.productName} />
              <WrapSearchIcon>
                <SearchIcon />
              </WrapSearchIcon>
              <TitleCard>{product.productName}</TitleCard>
              <Description>{product.descriptionShort}</Description>
              <Price>
                <span>R$</span>
                <span>
                  {product.price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </Price>
            </Card>
          );
        })}
      </Grid>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        appElement={document.getElementById("root") || undefined}
        style={customStyles}
        contentLabel="Modal de Produto"
      >
        <BoxCloseIcon>
          <AiOutlineClose
            onClick={closeModal}
            size={30}
            style={{ cursor: "pointer", textAlign: "right" }}
          />
        </BoxCloseIcon>
        <ContentModal>
          <ImageProduct src={photo} alt={productName}/>
          <InfosModal>
            <h2>{productName}</h2>
            <PriceProduct>R$ {price}</PriceProduct>
            <DescriptionProduct>{description}</DescriptionProduct>
            <DetailsProduct href="/">Veja mais Detalhe do Produto &gt; </DetailsProduct>
            <ModalButton>Adicionar ao carrinho</ModalButton>
          </InfosModal>
        </ContentModal>
      </Modal>
    </Container>
  );
}
