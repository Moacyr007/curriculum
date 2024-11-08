import useIdioma from '~/hooks/useIdioma';
import useSobreMim from '~/hooks/useSobreMim';

const SobreMim = () => {
  const idioma = useIdioma();
  const sobreMim = useSobreMim();

  return (
    <section className="mt-5">
      <h3 className="text-xl text-section-title font-medium border-b-[3px] border-section-border mb-2">
        {idioma === 'portugues' ? 'Sobre mim' : 'About me'}
      </h3>

      <div>{sobreMim}</div>
      <br />
    </section >
  );
};

export default SobreMim;
