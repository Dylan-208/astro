import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import ModalZoom from "./components/ModalZoom";
import { useState } from "react";
import Rodape from "./components/Rodape";

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;
const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ContainerSessao = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [fotoFiltrada, setFotoFiltrada] = useState(fotos);
  const [buscar, setBusca] = useState(null);

  const fecharModal = () => setFotoSelecionada(null);
  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({ ...foto, favorite: !foto.favorite });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((item) => {
        if (item.id === foto.id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );
  };

  const aoPesquisar = (busca) => {
    setBusca(busca);
    setFotoFiltrada(
      fotosDaGaleria.filter((item) => item.titulo.includes(buscar))
    );
  };

  const aoSelecionarTag = (tag) => {
    setFotoFiltrada(
      fotosDaGaleria.filter((item) => {
        if (tag.id === 0) {
          return item.tagId;
        }
        return tag.id === item.tagId;
      })
    );
  };
  return (
    <>
      <EstilosGlobais />
      <FundoGradiente>
        <AppContainer>
          <Cabecalho aoPesquisar={aoPesquisar} />
          <MainContainer>
            <BarraLateral />
            <ContainerSessao>
              <Banner />
              <Galeria
                aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
                fotos={fotoFiltrada}
                aoAlternarFavorito={aoAlternarFavorito}
                aoSelecionarTag={aoSelecionarTag}
              />
            </ContainerSessao>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSelecionada}
          aoFechar={fecharModal}
          aoAlternarFavorito={aoAlternarFavorito}
        />
        <Rodape />
      </FundoGradiente>
    </>
  );
}

export default App;
