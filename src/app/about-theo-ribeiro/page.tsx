import paths from '@/lib/paths';
import seo from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next-export-optimize-images/image';

export async function generateMetadata(): Promise<Metadata> {
  return {
    // alternates: {
    //   canonical: '/',
    // },
    ...seo,
    title: 'About',
    openGraph: {
      title: `About Theo Ribeiro | Cinematograher`,
      description: `${seo.description}`,

      images: [
        {
          url: `/${paths.aboutPage()}/opengraph-custom.png`,
          alt: `${seo.description}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

function AboutPage() {
  return (
    <article className="mx-auto max-w-layout">
      <header>
        <h1 className="sr-only">
          About Theo Ribeiro - Director of Photography
        </h1>
        <Image
          src="https://assets.theoribeiro.com/img/TR_2019_008_000504_LeicaQ_Web.jpg"
          width={2500}
          height={1667}
          alt="Portrait of Theo Ribeiro"
          title="Read Theo Ribeiro Bio information"
          className="sm:py-4"
        />
      </header>
      <section className="sm:py-21 prose max-w-none py-8 text-foreground sm:prose-xl prose-p:leading-tight sm:prose-p:leading-normal">
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
      </section>
    </article>
  );
}

export default AboutPage;
