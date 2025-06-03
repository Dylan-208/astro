import styled from "styled-components";
import logo from "../../../public/imagens/logo.png";
import CampoTexto from "../CampoTexto/CampoTexto";

const Header = styled.header`
  padding: 60px 0px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 220px;
  }
`;

const Cabecalho = ({ aoPesquisar }) => {
  return (
    <>
      <Header>
        <img src={logo} alt="Logo" />
        <CampoTexto aoPesquisar={aoPesquisar} />
      </Header>
    </>
  );
};

export default Cabecalho;
