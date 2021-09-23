import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="image-container">
          <Image
            src="/images/jared.jpg" // Route to image file
            height={600} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Jared headshot"
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

          .image-container {
            width: 400px;
            animation: fadeInAnimation ease 2.5s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }

          @keyframes fadeInAnimation {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
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
