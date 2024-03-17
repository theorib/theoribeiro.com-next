import Image from 'next/image';
import aboutImg from 'public/img/TR_2019_008_000504_LeicaQ_Web.jpg';
function AboutPage() {
  return (
    <div className="mx-auto max-w-layout">
      <Image
        src={aboutImg}
        alt="Portrait of Theo Ribeiro"
        className="sm:py-4"
      />
      <div className="sm:py-21 prose max-w-none py-8 sm:prose-xl prose-p:leading-tight sm:prose-p:leading-normal">
        <p>
          Theo Ribeiro (Theo Toledo Ribeiro Pereira) is an award winning
          Director of Photography based in London, UK.
        </p>
        <p>
          Born in São Paulo, Brazil, Theo has worked as a cinematographer in
          both drama and documentary, having gravitated from the stills world
          where he has worked for more than 12 years.
        </p>
        <p>
          Theo is an experienced rock climber and mountaineer and has a degree
          in Geography by the University of São Paulo in Brazil.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
