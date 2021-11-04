import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.upper}>
          <li className={styles.li}>
            <a
              href="https://github.com/jaredaritter"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/images/GitHub-Mark-32px.png"
                alt="Small Github Icon"
                width="28px"
                height="28px"
              />
            </a>
          </li>
          <li className={styles.li}>
            <a
              href="https://www.linkedin.com/in/jaredaritter"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/images/LI-In-Bug-Tiny.png"
                alt="Small LinkedIn Icon"
                width="32px"
                height="32px"
              />
            </a>
          </li>
          <li className={styles.li}>
            <a
              href="https://twitter.com/jaredaritter"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/images/Twitter-Logo-black.svg"
                alt="Small Twitter Icon"
                width="32px"
                height="32px"
              />
            </a>
          </li>
        </ul>
        <div className={styles.lower}>
          <Link href="https://github.com/jaredaritter/jared-portfolio/issues">
            <a
              className={`${styles.p} ${styles.a}`}
              target="_blank"
              rel="noopener"
            >
              Issues
            </a>
          </Link>
          <p className={styles.p}>&copy; 2020 Jared A Ritter</p>
        </div>
      </div>
    </footer>
  );
}
