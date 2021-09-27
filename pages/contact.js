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
            This contact form is the easiest way to get in touch. My social
            media links can be found below.
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
            <p className="from">
              <label htmlFor="name">Name</label>&nbsp;
              <input type="text" id="name" name="name" required />
            </p>
            <p className="reply">
              <label htmlFor="email">Email</label>&ensp;
              <input type="email" id="email" name="email" required />
            </p>
            <p className="message">
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
          textarea {
            font-family: inherit;
            font-size: 100%;
          }

          form {
            margin: 0 auto;
            padding: 1em;
            box-sizing: border-box;
          }

          .from,
          .reply {
            display: flex;
          }

          input,
          textarea {
            border: 2px solid #333;
            border-radius: 5px;
            padding: 0 10px;
            width: 80%;
            background: none;
          }

          input:focus,
          textarea:focus {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
          }

          textarea {
            display: block;
            padding: 10px;
            margin: 8px 0 0 0;
            width: 100%;
            height: 90%;
            border-right: 1px solid;
            overflow: auto;
          }

          button {
            padding: 5px;
            font-weight: bold;
            font-size: 0.6em;
            border: 2px solid #333;
            border-radius: 5px;
            background: none;
            cursor: pointer;
            margin: 10px 3px 0;
          }

          button:after {
            content: ' >>>';
          }

          button:hover,
          button:focus {
            outline: none;
            background: #000;
            color: #fff;
          }

          h2 {
            text-align: center;
          }

          p {
            max-width: 600px;
            margin: 3px auto;
          }

          section {
            max-width: 1000px;
            margin: auto;
          }

          .card {
            margin: auto;
            border: 2px solid #333;
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
