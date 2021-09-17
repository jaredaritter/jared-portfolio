import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <h2>How to reach me?</h2>
        <div id="intro">
          <p>
            My social media and github are the best ways to get in touch. The
            links are below. In the future I will post an email for direct
            communication. I would love to hear from you!
          </p>
        </div>
      </main>
    </Layout>
  );
}
