import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>Jared A Ritter</a>
        </Link>
      </div>
      <div className="links">
        <Link href="/projects">
          <a className="link">Projects</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
        <Link href="/contact">
          <a className="link">Contact</a>
        </Link>
      </div>
      <style jsx>
        {`
          header {
            padding: 0.5rem 1.5rem;
            text-align: center;
            background-color: rgba(17, 24, 39, 1);
            justify-content: space-between;
          }

          a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease-out;
          }

          a:hover {
            color: lightblue;
          }

          .logo {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }

          .links {
            padding-top: 0.25rem;
            display: flex;
            flex-direction: column;
          }

          .link {
            margin-right: 0.5rem;
          }

          @media screen and (min-width: 550px) {
            header {
              display: flex;
            }
            .links {
              display: block;
            }
          }
        `}
      </style>
    </header>
  );
}
