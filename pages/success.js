import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Congratulations you've submitted the form!</h2>
      </section>
      <style jsx>
        {`
          h2 {
            text-align: center;
          }

          section {
            max-width: 1000px;
            margin: auto;
          }

          .details {
            margin: 0 5px 0 10px;
          }
        `}
      </style>
    </Layout>
  );
}
