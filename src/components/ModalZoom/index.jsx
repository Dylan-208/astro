import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import fechar from "../../../public/icones/fechar.png";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  left: 142px;
  background-color: transparent;
  border: none;
  button {
    background-image: url(${fechar});
    height: 32px;
    width: 32px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
  }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay onClick={aoFechar} />
          <DialogEstilizado open={!!foto}>
            <Imagem
              key={foto.id}
              fotos={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form method="dialog">
              <button onClick={aoFechar} />
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
