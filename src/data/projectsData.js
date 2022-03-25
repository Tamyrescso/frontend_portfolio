import cover from '../images/food_cover.png';
import { starwars } from '../images/projects';
const ptProjects = [
  {
    title: 'Zoo Functions',
    description: 'Projeto realizado quando eu estava no primeiro módulo da Trybe, Fundamentos do desenvolvimento Web, nele eu exercitei meus conhecimentos em HOFs e nas ferramentas do ES6',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/fundamentos/zoo_functions',
  },
  {
    title: 'Tryunfo',
    description: 'Aplicação feita no início dos meus estudos com React, consiste em uma apresentação de cartas no estilo de jogo trunfo. Eu escolhi fazer o css baseado na série da Netflix "Alice in Borderland"',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/tryunfo',
  },
  {
    title: 'Trybewallet',
    url: cover,
    description: 'Aplicação que consistia em uma página de login e a página principal com informações do cliente e uma carteira de controle de gastos com conversor de moedas que o usuário pode adicionar, remover ou editar despesas. Para o desenvolvimento, foi utilizado o React com Redux',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/trybewallet',
  },
  {
    title: 'StarWars Planets',
    description: 'O projeto consistia em retornar a primeira página da API de planetas do starwars, organizar essas informações em uma tabela e implementar opções de filtragem. Como implementações além do pedido eu retornei todos os planetas fornecidos pela API e implementei a paginação. Nesse projeto foram exercitados os conhecimentos em React Hooks e Context API.',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/star_wars_planets',
    image: starwars,
  },
  {
    title: 'App de receitas',
    description: 'Projeto em grupo realizado no fim do módulo de front-end, para consolidar todos os conhecimentos adquiridos. Consiste em um app de receitas desenvolvido para mobile onde o usuário pode procurar uma receita específica, explorar receitas baseado em diferentes critérios, favoritar e fazer as receitas, marcar como feitas, entre outras funcionalidades.',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/recipes_app',
  },
  {
    title: 'Store Manager',
    description: 'Projeto do módulo de back-end com o objetivo de exercitar os conhecimentos adquiridos em SQL, node.js, padrão MSC, app em camadas, padrão REST, TDD e testes com Mocha, Chai e Sinon. Consiste em uma API de um sistema de gerenciamento de vendas, onde é possível criar, visualizar, deletar e atualizar produtos e vendas.',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/back_end/store_manager',
  },
  {
    title: 'Blogs API',
    description: 'Uma API de um CRUD de posts de blog com endpoints que estarão conectados ao banco de dados, utilizando ORM com o pacote sequelize.',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/back_end/blogs_api',
  }
]

export default ptProjects;