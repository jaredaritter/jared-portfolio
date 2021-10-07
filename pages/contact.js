import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/contact.module.css';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  return (
    <Layout home>
      <Head>
        <link rel="canonical" href="https://www.jaredaritter.com/contact" />
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <h2 className={styles.h2}>How to reach me?</h2>
        <div className={styles.details}>
          <p className={styles.p}>
            This contact form is the easiest way to get in touch. My social
            media links can be found below.
          </p>
        </div>
        {success && (
          <p className={`${styles.p} ${styles.success}`}>
            Successfully submitted form!
          </p>
        )}
        <div className={styles.card}>
          <form
            name="contact"
            method="POST"
            action="/contact?success=true"
            netlify-honeypot="bot-field"
            data-netlify="true"
            className={styles.form}
          >
            <input
              className={styles.input}
              type="hidden"
              name="form-name"
              value="contact"
            />
            <p className={`${styles.p} ${styles.hidden}`}>
              <label>
                Don’t fill this out if you’re human:{' '}
                <input className={styles.input} name="bot-field" />
              </label>
            </p>
            <p className={`${styles.p} ${styles.from}`}>
              <label htmlFor="name">Name</label>&nbsp;
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className={`${styles.p} ${styles.reply}`}>
              <label htmlFor="email">Email</label>&ensp;
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
            <p className={`${styles.p} ${styles.message}`}>
              <label htmlFor="message">Message</label>
              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                required
              ></textarea>
            </p>
            <p className={styles.p}>
              <button className={styles.button} type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
