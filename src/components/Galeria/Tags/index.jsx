import styled from "styled-components";
import tags from "./tags.json";
const ContainerTags = styled.div`
  display: flex;
  font-size: 24px;
  color: #ffffff;
  gap: 10px;
  align-items: center;
`;

const Tag = styled.button`
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
  background-color: #d9d9d94d;
  border-radius: 10px;
  color: #ffffff;
  height: 49px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Tags = ({ aoSelecionarTag }) => {
  return (
    <>
      <ContainerTags>
        <p>Busque por tags: </p>
        {tags.map((item) => {
          return (
            <Tag onClick={() => aoSelecionarTag(item)} key={item.id}>
              {item.titulo}
            </Tag>
          );
        })}
      </ContainerTags>
    </>
  );
};

export default Tags;
