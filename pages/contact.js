import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
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
        {success && <p className="success">Successfully submitted form!</p>}
        <div className="card">
          <form
            name="contact"
            method="POST"
            action="/contact?success=true"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>
      <style jsx>
        {`
          button,
          input,
          select,
          textarea {
            font-family: inherit;
            font-size: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

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

          .card {
            margin: auto;
            border: 1px solid grey;
            border-radius: 5px;
            padding: 10px;
            margin-top: 1rem;
            max-width: 400px;
          }

          .details {
            margin: 0 5px 0 10px;
          }

          .hidden {
            display: none;
          }

          .success {
            color: green;
            margin-top: 1rem;
            text-align: center;
          }
        `}
      </style>
    </Layout>
  );
}
