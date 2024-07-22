import useIdioma from './useIdioma';

interface Experience {
  title: string;
  subTitle: string;
  date: string;
  location: string;
  description: string[];
  skillsList: string[];
}

const useExperiencias = () => {
  const idioma = useIdioma();
  if (idioma === 'ingles') return experiences;
  return experiencias;
};

const experiencias: Experience[] = [
  {
    title: 'Desenvolvedor Fullstack',
    subTitle: 'Ibrowse Consultoria',
    date: 'ago de 2023 - atualmente',
    location: 'Remoto',
    description: [
      'Atualmente trabalhando com Java, Jsf, PrimeFaces , Spring e NHibernate.',
      'Trabalhei em correções urgentes e novas features em plataforma de gerenciamento para a SEDH(Secretaria de Estado de Direitos Humanos), utilizando .Net e Razor pages.',
      'Também atuei na evolução e sustentação de projetos da SUFRAMA (Superintendência da Zona Franca de Manaus), utilizando .Net e Angular.'

    ],
    skillsList: [
      '.Net',
      'C#',
      'Enfity Framework',
      'NHibernate',
      'Java',
      'Spring',
      'Windows Server',
      'Git',
      'Postgres',
      'Oracle Database',
      'Microsoft SQL Server',
    ],
  },
  {
    title: 'Desenvolvedor Backend',
    subTitle: 'Usadosbr',
    date: 'nov de 2021 - jul de 2023',
    location: 'Remoto',
    description: [
      'Atuei como desenvolvedor backend .Net. Responsável pelo desenvolvimento de APIs e serviços para as plataformas da Usadosbr, um hubde soluções automotivas para compradores, vendedores, bancos e montadoras.',
      'Trabalhei no desenvolvimento de uma api de consulta de anúncios no Elasticsearch para classificados de veículos com grande volume de acessos e integração com apis e serviços externos como Google Analytics.',
      'Trabalhei no desenvolvimento de pipelines de CI/CD no Github Actions com Nuke e Shell Scripting para deploy de aplicações no Aks(Serviço de Kubernetes do Azure).',
      'Também fui responsável pela sustentação e desenvolvimento de novas funcionalidades em plataforma legada desenvolvida em PHP/Laravel.',
      'Menssageria com RabbitMQ e MassTransit.',
      'Implementação Api Gateway com Ocelot',
      'Testes unitários e de integração com XUnit.'
    ],
    skillsList: [
      '.Net',
      'C#',
      'Elasticsearch',
      'RabbitMQ',
      'XUnit',
      'Azure/Aks',
      'K8s',
      'Git',
      'MobX',
      'Ocelot',
    ],
  },
  {
    title: 'Desenvolvedor Backend',
    subTitle: 'Sydy',
    date: 'ago de 2020 - nov de 2021',
    location: 'Remoto',
    description: [
      'Fui responsável pelo desenvolvimento de novas funcionalidades e manutenção de plataforma proprietária de gerenciamento e venda de sementes de soja, incumbida de processar mais de R$ 50 milhões em vendas anuais. API REST construída utilizando C# , ASP.NET Core, SQL Server, arquitetura em camadas e testes unitários com xUnit.',
      'Trabalhei no levantamento de requisitos, desenvolvimento e implantação do sistema em ambiente de produção.'
    ],
    skillsList: [
      '.Net',
      'C#',
      'Entity Framework',
      'Windows Server',
      'Microsoft SQL Server',
      'XUnit',
    ],
  },
];

const experiences: Experience[] = [
  {
    "title": "Fullstack Developer",
    "subTitle": "Ibrowse Consultoria",
    "date": "Aug 2023 - Present",
    "location": "Remote",
    "description": [
      "Currently working with Java, JSF, PrimeFaces, Spring, and NHibernate.",
      "Worked on urgent fixes and new features for a management platform for SEDH (State Department of Human Rights), using .NET and Razor Pages.",
      "Also involved in the development and maintenance of projects for SUFRAMA (Superintendence of the Manaus Free Trade Zone), using .NET and Angular."
    ],
    "skillsList": [
      ".NET",
      "C#",
      "Entity Framework",
      "NHibernate",
      "Java",
      "Spring",
      "Windows Server",
      "Git",
      "PostgreSQL",
      "Oracle Database",
      "Microsoft SQL Server"
    ]
  },

  {
    "title": "Backend Developer",
    "subTitle": "Usadosbr",
    "date": "Nov 2021 - Jul 2023",
    "location": "Remote",
    "description": [
      "Worked as a backend .NET developer. Responsible for developing APIs and services for Usadosbr's platforms, a hub of automotive solutions for buyers, sellers, banks, and manufacturers.",
      "Developed an API for vehicle classifieds search in Elasticsearch with high access volume and integration with external APIs and services like Google Analytics.",
      "Developed CI/CD pipelines in GitHub Actions using Nuke and Shell Scripting for application deployment in AKS (Azure Kubernetes Service).",
      "Responsible for maintaining and developing new features in a legacy platform developed in PHP/Laravel.",
      "Messaging with RabbitMQ and MassTransit.",
      "API Gateway implementation with Ocelot.",
      "Unit and integration testing with XUnit."
    ],
    "skillsList": [
      ".NET",
      "C#",
      "Elasticsearch",
      "RabbitMQ",
      "XUnit",
      "Azure/AKS",
      "Kubernetes",
      "Git",
      "MobX",
      "Ocelot"
    ]
  },
  {
    "title": "Backend Developer",
    "subTitle": "Sydy",
    "date": "Aug 2020 - Nov 2021",
    "location": "Remote",
    "description": [
      "Responsible for developing new features and maintaining a proprietary platform for managing and selling soybean seeds, handling over BRL 50 million in annual sales. REST API built using C#, ASP.NET Core, SQL Server, layered architecture, and unit tests with XUnit.",
      "Involved in requirement gathering, development, and deployment of the system in the production environment."
    ],
    "skillsList": [
      ".NET",
      "C#",
      "Entity Framework",
      "Windows Server",
      "Microsoft SQL Server",
      "XUnit"
    ]
  }

];

export default useExperiencias;
