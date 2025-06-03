import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const Campo = styled.input`
  width: 566px;
  height: 56px;
  padding: 12px 16px;
  border-color: #c98cf1;
  border: 2px solid;
  font-size: 19px;
  color: #d9d9d9;
  font-family: "gandhisans-regular";
  background: none;
  border-radius: 10px;
`;
const ContainerCampo = styled.div`
  position: relative;
  display: inline-block;
`;
const CampoTexto = ({ aoPesquisar }) => {
  return (
    <ContainerCampo>
      <Campo
        type="text"
        placeholder="O que você procura?"
        onChange={(e) => aoPesquisar(e.target.value)}
      />
      <IoSearchOutline
        style={{
          fontSize: "20px",
          color: "pink",
          position: "absolute",
          top: "20px",
          right: "40px",
          height: "38px",
          width: "38px",
        }}
      />
    </ContainerCampo>
  );
};

export default CampoTexto;
