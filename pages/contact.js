import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';

export default function Contact({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>I'm Jared</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section> */}
      <section>
        <h2>How to reach me?</h2>
        <div id="intro">
          <p>
            My social media and github are the best ways to get in touch. The
            links are below. In the future I will post an email for direct
            communication. I would love to hear from you!
          </p>
        </div>
      </section>
    </Layout>
  );
}
