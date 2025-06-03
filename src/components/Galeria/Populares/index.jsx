import styled from "styled-components";
import Titulo from "../../Titulo";
import populares from "../../../populares.json";

const ContainerPopulares = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;
const ImagemPopulares = styled.img`
  height: 158px;
  width: 212px;
  border-radius: 20px;
`;

const VerMais = styled.button`
  padding: 14px 55px;
  font-family: "GandhiSansBold";
  font-size: 20px;
  color: #ffffff;
  background-color: transparent;
  &:hover {
    background-color: #c98cf1;
  }
  border-radius: 10px;
  border: 2px solid #c98cf1;
`;
const Populares = () => {
  return (
    <ContainerPopulares>
      <Titulo $alinhamento="center">Populares</Titulo>

      {populares.map((item) => {
        return (
          <ImagemPopulares src={item.path} key={item.id} $path={item.path} />
        );
      })}
      <VerMais>Ver Mais</VerMais>
    </ContainerPopulares>
  );
};

export default Populares;
