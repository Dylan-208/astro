import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const ContainerGaleria = styled.div`
  display: flex;
`;

const ContainerFotos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 24px;
`;

const SessaoFluida = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
const Galeria = ({
  fotos = [],
  aoFotoSelecionada,
  aoAlternarFavorito,
  aoSelecionarTag,
}) => {
  return (
    <>
      <Tags aoSelecionarTag={aoSelecionarTag} />
      <ContainerGaleria>
        <SessaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ContainerFotos>
            {fotos.map((item) => (
              <Imagem
                key={item.id}
                fotos={item}
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
              />
            ))}
          </ContainerFotos>
        </SessaoFluida>
        <Populares />
      </ContainerGaleria>
    </>
  );
};

export default Galeria;
