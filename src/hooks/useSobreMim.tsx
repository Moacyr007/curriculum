import useIdioma from './useIdioma';

interface Idioma {
  idioma: string;
  nivel: string;
}

const useSobreMim = () => {
  const idioma = useIdioma();
  return idioma === 'portugues' ? sobreMim : aboutMe;
};

const sobreMim =
  "Sou um desenvolvedor de software fullstack, graduado em Ciência da Computação pela UFMT com sólido conhecimento em .Net e C#, também possui experiencia com Razor e Angular. Sempre trabalho pensando na qualidade e em resolver o problema proposto, independente da tecnologia. Também possuo experiencia profissional em arquitetura microsserviços e monotilo nas linguagens C#, Java. Frameworks .Net e Spring. Banco de dados Postgresql, SqlServer, MongoDb, Elasticsearch, Redis. Desenvolvimento de pipelines de CI/CD com deply Serviço de Kubernetes do Azure (AKS). Experiência com docker, testes unitários e de integração, messageria utilizando RabbitMQ e Apigateway com Ocelot.";

const aboutMe =
  "I am a fullstack software developer, graduated in Computer Science at UFMT(Federal University of Mato Grosso) with solid knowledge in .Net and C#, I also have experience with Razor and Angular. I always work thinking about quality and solving the proposed problem, regardless of technology. I also have professional experience in microservices and monotile architecture in C# and Java languages. .Net and Spring frameworks. Postgresql database, SqlServer, MongoDb, Elasticsearch, Redis. Development of CI/CD pipelines with Azure Kubernetes Service (AKS) deply. Experience with Docker, unit and integration testing, messaging using RabbitMQ and Apigateway with Ocelot.";

export default useSobreMim;
