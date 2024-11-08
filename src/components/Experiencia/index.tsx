import useExperiencias from '~/hooks/useExperiencias';
import useIdioma from '~/hooks/useIdioma';

const Experiencia = () => {
  const idioma = useIdioma();
  const experiencias = useExperiencias();

  return (
    <section className="mt-5">
      <h3 className="text-xl text-section-title font-medium border-b-[3px] border-section-border mb-2">
        {idioma === 'portugues' ? 'Experiência' : 'Experience'}
      </h3>

      {experiencias.map(
        ({ date, subTitle, location, title, description, skillsList }, index) => (
          <div className="mb-4" key={index}>
            <h4>{title}</h4>
            <h5 className="text-sm font-medium">{subTitle}</h5>

            <div className="flex gap-x-4 text-xs">
              <div className="flex items-center gap-1">
                <img
                  src="./calendar-outline.svg"
                  alt="Ícone de calendário"
                  className="h-3.5 w-3.h-3.5"
                />

                <p>{date}</p>
              </div>

              <div className="flex items-center gap-0.5">
                <img
                  src="./location-outline.svg"
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
              <span className="font-medium text-section-title">
                {idioma === 'portugues' ? 'Competências' : 'Skills'}:
              </span>

              {skillsList.map(
                (skill, index) =>
                  ` ${skill} ${index !== skillsList.length - 1 ? '-' : ''}`
              )}
            </p>
          </div>
        )
      )}


      <h3 className="text-xl text-section-title font-medium border-b-[3px] border-section-border mb-2">
        {idioma === 'portugues' ? 'Projeto' : 'About me'}
      </h3>

      <div>Também desenvolvi um sistema de Gestão de Confeitaria para suprir as necessidades de uma grande confeitaria de Cuiabá- MT com mais de 70mil clientes. O sistema permite gerenciar de forma integrada, os pedidos, funcionários e todo o processo de produção de bolos, doces e salgados. O sistema também conta com funcionalidades para cadastro de fichas técnicas, garantindo controle detalhado sobre os ingredientes e o custo de cada produto. Criado do zero utilizando .NET 8 e PostgreSQL, o sistema adota uma arquitetura monolítica com implementação do padrão CQRS. Além disso, o projeto está containerizado, facilitando a rápida implantação e escalabilidade.
      </div>
    </section>
  );
};

export default Experiencia;
