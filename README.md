# React + Vite

Para iniciar o projeto foi utilizado:

    npm i vite@latest

Que é recomendado pelos desenvolvedores do React para tornar a aplicação mais rápida.

Em seguinda foi instalado o styled-components:

    npm i styled-components

Usando o styled componentes:

    const FundoGradiente = styled.div`"estilização CSS"`

O fundo ficou com uma margem. Então é necessário utilizar o GlobalStyles. Deve ser criado um componente que será global.
E dentro dele terá:

    const EstilosGlobais = createGlobalStyles`
    "EstilosGlobais"
    `

Na construção do elemento Galeria, foi utilizado o containerSessao. Nele temos o flex-grow.

    Flex-grow: permite o crescimento dos elementos até o max da tela. Quebrando linha e respeitando o elemento que esta margeado anteriormente. Nesse caso o elemento BarraLateral
