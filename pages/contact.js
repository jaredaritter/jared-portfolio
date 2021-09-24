import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>How to reach me?</h2>
        <div className="details">
          <p>
            My social media and github are the best ways to get in touch. The
            links are below. In the future I will post an email for direct
            communication. I would love to hear from you!
          </p>
        </div>
      </section>
      <style jsx>
        {`
          h2 {
            text-align: center;
          }

          p {
            max-width: 600px;
            margin: auto;
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
