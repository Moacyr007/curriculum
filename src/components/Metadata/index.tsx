import Head from 'next/head';
import useIdioma from '~/hooks/useIdioma';

const Metadata = () => {
  const idioma = useIdioma();

  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="./favicon.svg" />

      <title>{`Moacyr Pinheiro - ${idioma === 'portugues' ? 'Currículo' : 'Resume'
        }`}</title>

      <meta
        content={`Moacyr Pinheiro - ${idioma === 'portugues' ? 'Desenvolvedor Fullstack' : 'Fullstack Developer'
          }`}
        name="description"
      />

      <meta
        property="og:title"
        content={`Moacyr Pinheiro - ${idioma === 'portugues' ? 'Currículo' : 'Resume'}`}
      />

      <meta
        property="og:url"
        content={`https://moacyr007.github.io/curriculum/${idioma === 'portugues' ? '' : 'english'
          }`}
      />

      <meta
        property="og:description"
        content="Moacyr Pinheiro Resume/Currículo"
      />

      <meta property="og:image:url" content="./favicon.svg" />

      <meta name="theme-color" content="#FFFFFF" />
    </Head>
  );
};

export default Metadata;
