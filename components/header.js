import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={`${styles.logo} ${utilStyles.growSm}`}>
          <Link href="/">
            <a className={styles.a}>Jared A Ritter</a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/projects">
            <a className={`${styles.a} ${styles.link} ${utilStyles.growMd}`}>
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className={`${styles.a} ${styles.link} ${utilStyles.growMd}`}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className={`${styles.a} ${styles.link} ${utilStyles.growMd}`}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
