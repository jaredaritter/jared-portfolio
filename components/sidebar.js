// import { useState } from 'react';
import styles from '../styles/sidebar.module.css';

export default function Sidebar({ projects }) {
  return (
    <nav className={styles.nav}>
      <div>
        {projects.map(({ id, title }) => (
          <li className={styles.li} key={id}>
            <a className={styles.a} href={`#${id}`}>
              {title}
            </a>
          </li>
        ))}
      </div>
    </nav>
  );
}

// STATE AND CLICK HANDLER FOR FUTURE DROPDOWN
// const [active, setActive] = useState(false);

// const handleClick = () => {
//   setActive(!active);
// };

// BUTTON AND DIV LOGIC FOR FUTURE DROPDOWN
// <button onClick={handleClick}>Click</button>
// <div className={`${active ? '' : 'hidden'}`}>
//   {projects.map(({ id, title }) => (
//     <li key={id}>{title}</li>
//   ))}
// </div>
