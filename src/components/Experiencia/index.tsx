import { Experience } from '~/types/experience';

const Experiencia = () => {
  return (
    <section className="mt-5">
      <h3 className="text-xl font-medium border-b-[3px] border-gray-900 mb-2">
        Experiência
      </h3>

      {experiencias.map(
        ({ date, subTitle, location, title, description, skillsList }, index) => (
          <div className="mb-4" key={index}>
            <h4>{title}</h4>
            <h5 className="text-sm font-medium">{subTitle}</h5>

            <div className="flex gap-x-4 text-xs">
              <div className="flex items-center gap-1">
                <img
                  src="/calendar-outline.svg"
                  alt="Ícone de calendário"
                  className="h-3.5 w-3.h-3.5"
                />

                <p>{date}</p>
              </div>

              <div className="flex items-center gap-0.5">
                <img
                  src="/location-outline.svg"
                  alt="Ícone de calendário"
                  className="h-3.5 w-3.h-3.5"
                />

                <p>{location}</p>
              </div>
            </div>

            <ul className="list-disc pl-4 mt-2">
              {description.map((item, index) => (
                <li className="text-sm mb-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm">
              <span className="font-medium">Competências:</span>

              {skillsList.map(
                (skill, index) =>
                  ` ${skill} ${index !== skillsList.length - 1 ? '-' : ''}`
              )}
            </p>
          </div>
        )
      )}
    </section>
  );
};

const experiencias: Experience[] = [
  {
    title: 'Desenvolvedor de Software - Frontend',
    subTitle: 'UsadosBr',
    date: 'nov de 2021 - atualmente',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento do Usadosbr.com, sistema de classificados de veículos novos e usados. Foram desenvolvidas funcionalidades para buscas, listagem/filtragem e visualização de mais de 95 mil anúncios de veículos e mais de 3 mil revendas. Foram desenvolvidas funcionalidades para realizar simulações de financiamento e consórcio nos veículos anunciados, também foram desenvolvidas landing pages para o sistema.',
      'Desenvolvimento do CRM - Tudo em 1, o sistema de CRM(Customer Relationship Management) do grupo Usadosbr. Foram desenvolvidas funcionalidades que permitem a criação, visualização, edição e deleção de atendimentos e tarefas. Também foram desenvolvidas funcionalidades para visualização de relatórios, chat com o cliente, etc.',
      'Desenvolvimento do Tudo em 1, sistema que centraliza todos os produtos do Grupo UsadosBr em um só lugar. Foram desenvolvidas diversas seções possibilitando o usuário a utilizar todos os serviços do grupo UsadosBr e podendo obter suporte sobre os mesmos.',
      'Desenvolvimento do Moto.com.br, líder no segmento de classificados de moto. Foram desenvolvidas funcionalidades para listagem/filtragem e visualização de mais de 18 mil motos e mais de 500 revendas. Foram desenvolvidas funcionalidades para realizar simulações de financiamento e consórcio nos veículos anunciados, também foram desenvolvidas landing pages para o sistema.',
      'Desenvolvimento de novas funcionalidades e manutenção no sistema de gerenciamento de contas dos usuários do grupo UsadosBr.',
      'Desenvolvimento de testes unitários para os componentes utilizando Vitest e Jest.',
    ],
    skillsList: [
      'TypeScript',
      'Nextjs',
      'React.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Linux',
      'Git',
      'Node.js',
      'Zustand',
    ],
  },
  {
    title: 'Desenvolvedor de Software - Frontend',
    subTitle: 'Sydy',
    date: 'fev de 2021 - nov de 2021',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de novas funcionalidades e manutenção de plataforma proprietária de venda de sementes de soja, incumbida de processar mais de R$ 50 milhões em vendas anuais.',
      'Desenvolvimento de novas funcionalidades e manutenção de plataformas proprietárias de cadastro e divulgação de dados e informações de agronegócio.',
      'Desenvolvimento de novas funcionalidades e manutenção de plataforma proprietária de gerenciamento de sementes de soja.',
      'Desenvolvimento de protótipos de novas funcionalidades para os sistemas, em conjunto com a participação na concepção e documentação dessas funcionalidades.',
    ],
    skillsList: [
      'TypeScript',
      'React.js',
      'JavaScript',
      'Vue.js',
      'HTML',
      'CSS',
      'Linux',
      'Git',
      'Node.js',
      'Ant.Design',
      'MobX',
      'Bootstrap',
      'Redux.js',
    ],
  },
  {
    title: 'Desenvolvedor de Software - Frontend Jr',
    subTitle: 'Infocorp - Empresa Júnior',
    date: 'nov de 2018 - jun de 2021',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de um sistema web de gamificação para a empresa, visando incentivar o engajamento e o alcance de melhores performances a partir do uso de elementos como pontuações, competições, premiações, etc.',
      'Desenvolvimento de documentações para os projetos da empresa e participação em reuniões com clientes, auxiliando assim no processo de concepção e documentação dos sistemas.',
      'Desenvolvimento de Protótipos utilizando Figma e Adobe XD para aplicações desenvolvidas na empresa.',
    ],
    skillsList: [
      'JavaScript',
      'HTML',
      'CSS',
      'Linux',
      'Git',
      'Chart.js',
      'Figma',
      'Adobe XD',
    ],
  },
  {
    title: 'Pesquisador de Iniciação Científica',
    subTitle: 'Laboratório de Ambientes Virtuais Interativos - UFMT',
    date: 'ago de 2017 - mar de 2018',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de jogos educativos, em parceria com Hospital Universitário Júlio Müller, atuando na pesquisa e concepção de jogos com temas como Diabetes e Reciclagem. O desenvolvimento dos ambientes virtuais tridimensionais dos jogos foram feitos utilizando o moto gráfico Unity e a programação feita em C#.',
      'Busca por avaliação de metodologias de tecnologia assistiva, por meio de leitura de artigos e realização de revisões sistemáticas.',
    ],
    skillsList: ['Linux', 'Git', 'Unity3D', 'C#'],
  },
];

export default Experiencia;
