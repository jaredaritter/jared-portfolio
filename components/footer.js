import Image from 'next/image';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div id={styles.social}>
        <li className={styles.li}>
          <a href="https://github.com/jaredaritter">
            <Image
              src="/images/GitHub-Mark-32px.png"
              alt="Small Github Icon"
              width="28px"
              height="28px"
            />
          </a>
        </li>
        <li className={styles.li}>
          <a href="https://www.linkedin.com/in/jaredaritter">
            <Image
              src="/images/LI-In-Bug-Tiny.png"
              alt="Small LinkedIn Icon"
              width="32px"
              height="32px"
            />
          </a>
        </li>
        <li className={styles.li}>
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
        <p id={styles.copyright}>&copy; 2020 Jared A Ritter</p>
      </div>
    </footer>
  );
}
