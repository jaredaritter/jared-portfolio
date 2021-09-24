import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Contact() {
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
        <div className="card">
          <form
            name="contact"
            method="POST"
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
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>
      <style jsx>
        {`
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
            margin: 0 5px 0 10px;
            border: 1px solid grey;
            border-radius: 5px;
            padding: 10px;
            margin-top: 1rem;
            max-width: 600px;
          }

          .details {
            margin: 0 5px 0 10px;
          }

          .hidden {
            display: none;
          }
        `}
      </style>
    </Layout>
  );
}
