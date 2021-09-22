import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
// import Jared from '../public/images/jared.jpg'
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
            className="test"
            src="/images/jared.jpg" // Route to image file
            height={600} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Jared headshot"
          />
        </div>
        {/* <img src="/images/jared.jpg" alt="Jared headshot" className="image" /> */}
        <div id="highlights">
          <h2>Web Developer.</h2>
        </div>
        {/* <div id="intro">
          <p>Welcome, please take a look around.</p>
        </div> */}
      </section>
      <style jsx>
        {`
          #highlights {
            text-align: center;
            margin: 50px 0;
          }

          .test {
            border: 5px solid red !important;
            border-radius: 50%;
          }

          .image-container {
            width: 400px;
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
