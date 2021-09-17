import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Jared A Ritter</a>
        </Link>
      </div>
      <div>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </header>
  );
}
