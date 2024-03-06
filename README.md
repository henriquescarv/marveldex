# MarvelDex

MarvelDex é uma aplicação que possui o objetivo de consumir a API da Marvel, trazendo listagens de heróis, HQ's e autores, possibilitando, também, a filtragem por nome em cada página. Além disso, é possível acessar a tela de detalhamento do item clicando sobre o seu card.

Deploy: [marveldex.vercel.app](http://marveldex.vercel.app/)


![nav](./src/assets/images/screen_demo.png)



## Stack utilizada:

Este projeto foi construído utilizando as seguintes tecnologias:

- ReactJS: criação de toda a interface das páginas;
- TypeScript: tipagem estática do código;
- Styled-components: estilização dinâmica dos componentes;
- Axios: para realizar as chamadas à API.
- md5: função criação do hash das chaves + timestamp, exigido pela API.
- Redux: armazenamento e gerenciamento de estados.
- React Router Dom: gerenciamento de rotas e navegação entre as páginas.

## Configurações iniciais (localhost):

1. É necessário possuir o [Yarn instalado](https://classic.yarnpkg.com/en/docs/install/);
2. Clonar este [repositório](https://github.com/henriquescarv/marveldex);
3. Instalar as dependências utilizando o comando '_yarn install_';
4. Inicializar o projeto utilizando o comando '_yarn start_';

## Navegação:

1. Acessar o site oficial da [API da Marvel](https://developer.marvel.com/documentation/getting_started) e obter as suas chaves pública e privada;
2. Realizar o _login_ através da rota '/login' da aplicação, utilizando as chaves obtidas;
3. Caso o acesso seja bem sucedido, a aplicação redirecionará você para a rota '/characters', com a lista de heróis retornada pela API.




## Desenvolvido por:

- [**Henrique Carvalho**](https://github.com/henriquescarv)
