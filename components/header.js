import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={`logo ${utilStyles.growSm}`}>
          <Link href="/">
            <a className="grow">Jared A Ritter</a>
          </Link>
        </div>
        <div className="links">
          <Link href="/projects">
            <a className={`link ${utilStyles.growMd}`}>Projects</a>
          </Link>
          <Link href="/about">
            <a className={`link ${utilStyles.growMd}`}>About</a>
          </Link>
          <Link href="/contact">
            <a className={`link ${utilStyles.growMd}`}>Contact</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          a {
            color: white;
            text-decoration: none;
          }

          header {
            min-width: 280px;
            background-color: rgba(17, 24, 39, 1);
            grid-row-start: 1;
            grid-row-end: 2;
          }

          .container {
            max-width: 1000px;
            margin: auto;
            padding: 0.5rem 1.5rem;
            text-align: center;
            justify-content: space-between;
          }

          .logo {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }

          .links {
            padding-top: 0.25rem;
            display: flex;
            justify-content: center;
          }

          .link {
            display: block;
            margin-right: 0.5rem;
          }

          @media screen and (min-width: 550px) {
            .container {
              display: flex;
            }
          }
        `}
      </style>
    </header>
  );
}
