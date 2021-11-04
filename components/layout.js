import Head from 'next/head';
import styles from '../styles/layout.module.css';
import Header from './header';
import Footer from './footer';

export const siteTitle = 'Jared A Ritter';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* ICON */}
        <link rel="icon" href="/images/jaredAvatar-favicon-64x64.png" />

        {/* <!-- HTML Meta Tags --> */}
        <meta
          name="description"
          content="Jared A Ritter's portfolio page. A web developer, Jared is always learning, growing, and contributing. This page contains a list of his projects, a bit of his personality, and ways to contact him."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.jaredaritter.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="Jared A Ritter's portfolio page. A web developer, Jared is always learning, growing, and contributing. This page contains a list of his projects, a bit of his personality, and ways to contact him."
        />
        <meta
          property="og:image"
          content="https://www.jaredaritter.com/images/link-logo.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jaredaritter.com" />
        <meta property="twitter:url" content="https://www.jaredaritter.com/" />
        <meta name="twitter:title" content={siteTitle} />
        <meta
          name="twitter:description"
          content="Jared A Ritter's portfolio page. A web developer, Jared is always learning, growing, and contributing. This page contains a list of his projects, a bit of his personality, and ways to contact him."
        />
        <meta
          name="twitter:image"
          content="https://www.jaredaritter.com/images/link-logo.png"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
