import styled from "styled-components";
import banner from "../../../public/banner.png";

const BannerDiv = styled.div`
  background-image: url(${banner});
  width: 100%;
  border-radius: 20px;
  background-repeat: no-repeat;
  margin-top: 20px;
  height: 328px;
  background-size: cover;
`;

const TextoEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 300px;
  height: 140px;
  margin-left: 64px;
  margin-top: 95px;
  font-size: 40px;
  color: #ffffff;
  line-height: 48px;
`;

const Banner = () => {
  return (
    <BannerDiv>
      <TextoEstilizado>
        A galeria mais completa de fotos do espaço!
      </TextoEstilizado>
    </BannerDiv>
  );
};

export default Banner;
