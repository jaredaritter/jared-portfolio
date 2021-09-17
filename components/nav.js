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
            display: flex;
            padding: 0.5rem 1.5rem;
            text-align: center;
            background-color: rgba(17, 24, 39, 1);
            color: white;
            justify-content: space-between;
          }

          a {
            color: white;
          }

          .logo {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }

          .links {
            padding-top: 0.25rem;
          }

          .link {
            margin-right: 0.5rem;
          }
        `}
      </style>
    </header>
  );
}
