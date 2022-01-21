import { InputSearch } from "../InputSearch";
import {
  BagIcon,
  Bar,
  BoxYourBuys,
  Categories,
  Header,
  Logo,
  MainContent,
  MyAccount,
  PersonIcon,
  TopContent,
  UserInfo,
  WrapCategories,
  WrapMainContent,
  WrapTopContent,
} from "./styles";

export function Nav() {
  return (
    <Header>
      <WrapTopContent>
        <TopContent>
          <span>Compra 100%</span>
          <Bar />
          <span>1 troca gr&aacute;tis 100%</span>
          <Bar />
          <span>5x sem juros</span>
          <Bar />
          <span>entregas em todo brasil</span>
        </TopContent>
      </WrapTopContent>

      <MainContent>
        <WrapMainContent>
          <Logo>
            <span>Ninja</span> <span>Som</span>
          </Logo>
          <InputSearch placeholder="BUSQUE AQUI..." />
          <div>
            <span>(11)</span>
            <span>99999-9999</span>
          </div>
          <MyAccount>
            <PersonIcon />
            <UserInfo>
              <span>Olá, Visitante</span>
              <span>minha conta</span>
            </UserInfo>
          </MyAccount>
        </WrapMainContent>

        <BoxYourBuys>
          <BagIcon />
          <span>Seu Carrinho</span>
          <span>0 Item(s)</span>
        </BoxYourBuys>
      </MainContent>

      <hr />
      <WrapCategories>
        <Categories>
          <span>Todas as categorias</span>
          <span>som profissional</span>
          <span>instrumento musicais</span>
          <span>promoções</span>
          <span>contato</span>
        </Categories>
      </WrapCategories>
    </Header>
  );
}
