import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div id="social">
        <li>
          <a href="https://github.com/jaredaritter">
            <Image
              src="/images/GitHub-Mark-32px.png"
              alt="Small Github Icon"
              width="28px"
              height="28px"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jaredaritter">
            <Image
              src="/images/LI-In-Bug-Tiny.png"
              alt="Small LinkedIn Icon"
              width="32px"
              height="32px"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jaredaritter">
            <Image
              src="/images/Twitter-Logo-black.svg"
              alt="Small Twitter Icon"
              width="32px"
              height="32px"
            />
          </a>
        </li>
      </div>
      <div>
        <p id="copyright">&copy; 2020 Jared A Ritter</p>
      </div>
      <style jsx>
        {`
          footer {
            min-width: 200px;
            grid-row-start: 3;
            grid-row-end: 4;
            margin-top: 1rem;
          }

          #social {
            display: flex;
            width: 140px;
            margin: auto;
          }

          #copyright {
            text-align: right;
            margin-right: 10px;
          }

          li {
            margin: 0 8px;
            list-style-type: none;
          }
        `}
      </style>
    </footer>
  );
}
