import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>$ whoami</h2>
        <div className="details">
          <p>
            <strong>Professional</strong>
          </p>
          <p>
            I am a web developer, and I love to learn from those around me. I
            come from a healthcare and academic background and have a passion
            for knowledge, teamwork, and service.
          </p>
          <p>
            I am a problem solver with a strong interest in performance,
            efficiency, minimalism, and clean design. I believe that a good user
            experience is more than what is seen on the page. I love making
            things work, and then making them work better.
          </p>
          <p>
            <strong>Personal</strong>
          </p>
          <p>
            I am a transplant to the Research Triangle area and find myself
            enjoying it immensely. Coffee shops, breweries, and local eats would
            be the norm, but I have been more conservative due to the pandemic.
            I'm a soccer player, climber, and I always enjoy getting out for a
            hike with my four-legged creature.
          </p>
          <p>
            <strong>History</strong>
          </p>
          <p>
            I'm a lifelong tech lover who was pulled in a different direction
            for the first decade of my professional life. Working in physical
            therapy provided me with a fulfilling way to help people, make a
            difference, and have amazing experiences. I was also fortunate to
            meet wonderful patients and co-workers along the way and can say
            that I am a better person for it. Ultimately, it was missing
            something though. Growth and challenge.
          </p>
          <p>
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
          <p>
            The longer I worked, the more I came to realize that what I desired
            in a career was continuous learning, problem solving, collaboration,
            and creation. I wanted to learn and contribute that knowledge to
            something bigger. Prior to physical therapy, I spent time in the
            computer science program and found it challenging, amazing, and
            terrifying, and I was ultimately pulled away to healthcare. It was
            the right choice at that point in my life for many reasons, but as I
            have matured I have come to realize that the challenge and curiosity
            that was sparked in those classes is still there and is where I want
            to devote my energy.
          </p>
          <p>
            And so I come full circle, bringing my career back to software and
            web development. It is a career I that I find more interesting and
            fulfilling each day as I wander further down the rabbit hole. There
            are lifetimes of knowledge and learning here that already exist and
            tomorrow will bring another lifetime. All I can say is bring it on.
          </p>
        </div>
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

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
