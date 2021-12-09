import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/about.module.css';

export default function About() {
  return (
    <Layout home>
      <Head>
        <link rel="canonical" href="https://www.jaredaritter.com/about" />
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <h2 className={styles.h2}>$ whoami</h2>
        <div className={styles.details}>
          <h3 className={styles.h3}>Professional</h3>
          <p className={styles.p}>
            I am a web developer, and I love to learn from those around me. I
            come from a healthcare and academic background and have a passion
            for knowledge, teamwork, and service.
          </p>
          <p className={styles.p}>
            I have a strong interest in performance, efficiency, minimalism, and
            clean design. I believe that a good user experience is more than
            what is seen on the page. I love making things work, and then making
            them work better.
          </p>
          <h3 className={styles.h3}>Personal</h3>
          <p className={styles.p}>
            I am a transplant to the Research Triangle area and find myself
            enjoying it immensely. It strikes a nice balance between having city
            life and having access to the outdoors, and the coffee shops,
            breweries, and restaurants continue to please. I'm a soccer player,
            book-lover, and I enjoy getting out for a hike with my four-legged
            creature.
          </p>
          <h3 className={styles.h3}>History (the longish short version)</h3>
          <p className={styles.p}>
            I'm a lifelong tech lover who was pulled in a different direction
            for the first decade of my professional life. Working in physical
            therapy provided me with a fulfilling way to help people, make a
            difference, and have amazing experiences. I was also fortunate to
            meet wonderful patients and co-workers along the way and can say
            that I am a better person for it. Ultimately, I was missing
            something. Challenge and change.
          </p>
          <p className={styles.p}>
            Outside of treating professional athletes and performing research
            studies, physical therapy is a relatively stable field. There are
            long delays between research results and their application in the
            field. A number that was cited in school was 17 years from research
            results to profession-wide acceptance and application. This is
            actually a good thing. You want a large body of evidence supporting
            a treatment method before mass implementation. The upside is that it
            leads to stable, safe, and effective treatment protocols. The
            downside is that truly novel learning experiences are limited and
            problem solving is more human-oriented than treatment-oriented.
          </p>
          <p className={styles.p}>
            The longer I worked, the more I came to realize that what I desired
            in a career was continuous learning, problem solving, collaboration,
            and creation. I wanted to learn and contribute that knowledge to
            something bigger. Prior to physical therapy, I was in the computer
            science program and found it challenging, amazing, terrifying, and
            ultimately I was pulled away to healthcare. It was the right choice
            at that point in my life, but as I matured I came to realize that
            the challenge and curiosity that was sparked in those classes was
            still there.
          </p>
          <p className={styles.p}>
            And so I come full circle, bringing my career back to software and
            web development. It is a career I that I find more interesting and
            fulfilling each day as I wander further down the rabbit hole. There
            are lifetimes of knowledge and learning here that already exist and
            tomorrow will bring another lifetime. All I can say is bring it on.
          </p>
        </div>
      </section>
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
