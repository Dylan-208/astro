import styled from "styled-components";
import ItemLista from "../ItemLista";

const EstiloLista = styled.ul`
  list-style: none;
  padding: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <EstiloLista>
          <ItemLista
            iconeAtivo="/public/icones/home-ativo.png"
            iconeInativo="/public/icones/home-inativo.png"
            ativo
          >
            Inicio
          </ItemLista>

          <ItemLista
            iconeAtivo="/public/icones/mais-vistas-ativo.png"
            iconeInativo="/public/icones/mais-vistas-inativo.png"
            ativo={false}
          >
            Mais Vistas
          </ItemLista>

          <ItemLista
            iconeAtivo="/public/icones/mais-curtidas-ativo.png"
            iconeInativo="/public/icones/mais-curtidas-inativo.png"
            ativo={false}
          >
            Mais Curtidas
          </ItemLista>

          <ItemLista
            iconeAtivo="/public/icones/novas-ativo.png"
            iconeInativo="/public/icones/novas-inativo.png"
            ativo={false}
          >
            Novas
          </ItemLista>

          <ItemLista
            iconeAtivo="/public/icones/surpreenda-me-ativo.png"
            iconeInativo="/public/icones/surpreenda-me-inativo.png"
            ativo={false}
          >
            Surpreenda-me
          </ItemLista>
        </EstiloLista>
      </nav>
    </aside>
  );
};

export default BarraLateral;
