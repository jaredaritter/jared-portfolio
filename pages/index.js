import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        {/* Future image position */}
        <div id="highlights">
          <h2>Web Developer.</h2>
          <h2>Physical Therapist Assistant.</h2>
          <h2>Educator.</h2>
        </div>
        {/* <div id="intro">
          <p>Welcome, please take a look around.</p>
        </div> */}
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
