import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={styles.imageContainer}>
          <Image
            priority
            src="/images/jared.jpg"
            height={600} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Jared headshot"
            className={`${utilStyles.borderCircle} ${utilStyles.fadeIn}`}
          />
        </div>
        <div className={styles.highlights}>
          <h2>Web Developer.</h2>
        </div>
      </section>
    </Layout>
  );
}
