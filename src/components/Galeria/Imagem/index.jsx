import styled from "styled-components";
import iconExpandir from "../../../../public/icones/expandir.png";
import favoritoAtivo from "../../../../public/icones/favorito-ativo.png";
import favorito from "../../../../public/icones/favorito.png";

const FigureImg = styled.div`
  display: flex;
  height: ${(props) => (props.$expandida ? "740px" : "336px")};
  width: ${(props) => (props.$expandida ? "1156px" : "448px")};
  border-radius: 20px;
  background-image: url(${(props) => props.$path});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: start;
  align-items: end;
`;

const ImgIcon = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${iconExpandir});
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ImgIconFavorito = styled.div`
  height: 24px;
  width: 24px;
  background-image: ${(props) =>
    props.$favorito ? `url(${favoritoAtivo})` : `url(${favorito})`};
  background-repeat: no-repeat;
  cursor: pointer;
`;

const FigureCaption = styled.div`
  display: flex;
  line-height: 2px;
  padding: 16px 20px;
  flex-direction: column;
  width: 100%;
  height: 50px;
  background-color: #001634;
  color: #ffffff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-decoration: ${(props) => (props.$bold ? "bold" : "")};
  p {
    font-family: "GandhiSansBold";
  }
`;

const ContainerCaminhoIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -5px;
  font-size: 15px;
  p {
    font-family: '"GandhiSansRegular"';
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  gap: 24px;
`;

const Imagem = ({
  fotos = [],
  aoZoomSolicitado,
  expandida = false,
  aoAlternarFavorito,
}) => {
  return (
    <FigureImg $path={fotos.path} $expandida={expandida}>
      <FigureCaption $bold>
        <p>{fotos.titulo}</p>
        <ContainerCaminhoIcons>
          <p>{fotos.path}</p>
          <ContainerIcons>
            <ImgIconFavorito
              $favorito={fotos.favorite}
              onClick={() => aoAlternarFavorito(fotos)}
            />
            {!expandida && <ImgIcon onClick={() => aoZoomSolicitado(fotos)} />}
          </ContainerIcons>
        </ContainerCaminhoIcons>
      </FigureCaption>
    </FigureImg>
  );
};

export default Imagem;
