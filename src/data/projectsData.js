import cover from '../images/food_cover.png';
import { starwars,
  recipes_app,
  trybewallet,
  tryunfo,
  todo,
  zoo,
  store,
  blog_posts } from '../images/projects';
const ptProjects = [
  {
    title: 'Todo List',
    description: 'Projeto realizado quando eu estava no primeiro módulo da Trybe, Fundamentos do desenvolvimento Web, nele eu pratiquei os conhecimentos em HTML, CSS e JavaScript',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/fundamentos/todo_list',
    gif: todo,
  },
  {
    title: 'Zoo Functions',
    description: 'Ainda no módulo de Fundamentos do desenvolvimento Web realizei esse projeto, onde exercitei meus conhecimentos em HOFs e nas ferramentas do ES6',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/fundamentos/zoo_functions',
    gif: zoo,
  },
  {
    title: 'Tryunfo',
    description: 'Aplicação feita no início dos meus estudos com React, consiste em uma apresentação de cartas no estilo de jogo trunfo. Eu escolhi fazer o css baseado na série da Netflix "Alice in Borderland"',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/tryunfo',
    gif: tryunfo,
  },
  {
    title: 'Trybewallet',
    url: cover,
    description: 'Aplicação que consistia em uma página de login e a página principal com informações do cliente e uma carteira de controle de gastos com conversor de moedas que o usuário pode adicionar, remover ou editar despesas. Para o desenvolvimento, foi utilizado o React com Redux',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/trybewallet',
    gif: trybewallet,
  },
  {
    title: 'StarWars Planets',
    description: 'O projeto consistia em retornar a primeira página da API de planetas do starwars, organizar essas informações em uma tabela e implementar opções de filtragem. Como implementações além do pedido eu retornei todos os planetas fornecidos pela API e implementei a paginação. Nesse projeto foram exercitados os conhecimentos em React Hooks e Context API',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/star_wars_planets',
    gif: starwars,
  },
  {
    title: 'App de receitas',
    description: 'Projeto em grupo realizado no fim do módulo de front-end, para consolidar todos os conhecimentos adquiridos. Consiste em um app de receitas desenvolvido para mobile onde o usuário pode procurar uma receita específica, explorar receitas baseado em diferentes critérios, favoritar e fazer as receitas, marcar como feitas, entre outras funcionalidades',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/recipes_app',
    gif: recipes_app,
  },
  {
    title: 'Store Manager',
    description: 'Projeto do módulo de back-end com o objetivo de exercitar os conhecimentos adquiridos em SQL, node.js, padrão MSC, app em camadas, padrão REST, TDD e testes com Mocha, Chai e Sinon. Consiste em uma API de um sistema de gerenciamento de vendas, onde é possível criar, visualizar, deletar e atualizar produtos e vendas',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/back_end/store_manager',
    gif: store,
  },
  {
    title: 'Blogs API',
    description: 'Uma API de um CRUD de posts de blog com endpoints conectados ao banco de dados, utilizando ORM com o pacote sequelize',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/back_end/blogs_api',
    gif: blog_posts,
  }
];

const enProjects = [
  {
    title: 'Todo List',
    description: "I've made this project when I was in the first module at Trybe, Web development fundamentals, in this project I practiced my knowledge in HTML, CSS and JavaScript",
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/fundamentos/todo_list',
    gif: todo,
  },
  {
    title: 'Zoo Functions',
    description: "When I was still in the Web development fundamentals module, I've made this project where I exercised my knowledge in HOFs and ES6 tools",
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/fundamentos/zoo_functions',
    gif: zoo,
  },
  {
    title: 'Tryunfo',
    description: "This application was made by me in the beginning of my React studies, this project is based on the Trunfo game and presents a deck of cards. I chose to customize it according to netflix 'Alice in Borderland' series",
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/tryunfo',
    gif: tryunfo,
  },
  {
    title: 'Trybewallet',
    url: cover,
    description: "This application consists in a login page and a main page with the user informations and a currency converter spending control wallet where the user can add, delete or edit expenses. In this project I used React with Redux for development",
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/trybewallet',
    gif: trybewallet,
  },
  {
    title: 'StarWars Planets',
    description: "The project consists of returning the first response page of a starwars planets API, organizes that data in a table and implements filter options. Besides that, I decided to implement a little more: I've made the app return ALL the planets provided by the API and I've create a pagination to present the data in a better way. In this project, I've practiced my knowledge in React hooks and Context API",
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/star_wars_planets',
    gif: starwars,
  },
  {
    title: 'App de receitas',
    description: "A group project, accomplished at the end of front end module, to consolidate all the knowledge acquired. It consists in a recipes app developed for mobile devices, the app allows the user to search specific recipes, explore recipes based on several criteria, to favorite a recipe, mark as done and others funcionalities",
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/front_end/recipes_app',
    gif: recipes_app,
  },
  {
    title: 'Store Manager',
    description: "A back end project with the objective of exercising the acquired knowledge in SQL, Node.js, the MSC pattern, layered app, the Rest pattern, TDD and test with Mocha, Chai e Sinon. The project consists in a API of a sales management system, where the user can create, visualize, delete and update products and sales",
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/back_end/store_manager',
    gif: store,
  },
  {
    title: 'Blogs API',
    description: 'A blog post CRUD API with endpoints connected to the database, using ORM with the sequelize package',
    repo: 'https://github.com/Tamyrescso/projetos_trybe/tree/main/back_end/blogs_api',
    gif: blog_posts,
  }
];

export { ptProjects, enProjects };