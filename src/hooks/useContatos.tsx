import useIdioma from './useIdioma';

interface Contato {
  title: string;
  icon: React.ReactNode;
  link?: string;
}

const useContatos = () => {
  const idioma = useIdioma();
  if (idioma === 'ingles') return contacts;
  return contatos;
};

const contatos: Contato[] = [
  {
    icon: (
      <img
        src="./location-outline.svg"
        alt="Ícone de localização"
        className="w-3.5 h-3.5 mb-1 -mr-1"
      />
    ),
    title: 'Florianópolis, SC',
  },
  {
    icon: (
      <img
        src="./mail-outline.svg"
        alt="moacyr pinheiro email"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'moacyr.moacyr11@gmail.com',
    link: 'mailto: moacyr.moacyr11@gmail.com',
  },
  {
    icon: (
      <img
        src="./call-outline.svg"
        alt="moacyr pinheiro telefone"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: '(48) 99208-5158',
    link: 'tel:+5548992085158',
  },
  {
    icon: (
      <img
        src="./logo-linkedin.svg"
        alt="moacyr pinheiro linkedin"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'moacyr-pinheiro',
    link: 'https://www.linkedin.com/in/moacyr-pinheiro/',
  },
  {
    icon: (
      <img
        src="./logo-github.svg"
        alt="moacyr pinheiro github"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'Moacyr007',
    link: 'https://github.com/Moacyr007/',
  },
];

const contacts: Contato[] = [
  {
    icon: (
      <img
        src="./location-outline.svg"
        alt="Location icon"
        className="w-3.5 h-3.5 mb-1 -mr-1"
      />
    ),
    title: 'Santa Catarina, Brazil',
  },
  {
    icon: (
      <img
        src="./mail-outline.svg"
        alt="moacyr pinheiro email"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'moacyr.moacyr11@gmail.com',
    link: 'mailto: moacyr.moacyr11@gmail.com',
  },
  {
    icon: (
      <img
        src="./call-outline.svg"
        alt="moacyr pinheiro telefone"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: '+55 (48) 99208-5158',
    link: 'tel:+5548992085158',
  },
  {
    icon: (
      <img
        src="./logo-linkedin.svg"
        alt="moacyr pinheiro linkedin"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'moacyr-pinheiro',
    link: 'https://www.linkedin.com/in/moacyr-pinheiro/',
  },
  {
    icon: (
      <img
        src="./logo-github.svg"
        alt="moacyr pinheiro github"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'Moacyr007',
    link: 'https://github.com/Moacyr007/',
  },
];

export default useContatos;
