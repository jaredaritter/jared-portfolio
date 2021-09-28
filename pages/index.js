import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="image-container">
          <Image
            priority
            src="/images/jared.jpg"
            height={600} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Jared headshot"
            className={`${utilStyles.borderCircle} ${utilStyles.fadeIn}`}
          />
        </div>
        <div id="highlights">
          <h2>Web Developer.</h2>
        </div>
      </section>
      <style jsx>
        {`
          #highlights {
            text-align: center;
            margin: 50px 0;
          }

          @media screen and (min-width: 400px) {
            .image-container {
              margin: 1vh auto;
            }
          }

          @media screen and (min-width: 550px) {
            .image-container {
              margin: 5vh auto;
            }
          }
        `}
      </style>
    </Layout>
  );
}
