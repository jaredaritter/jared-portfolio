import styles from '../styles/project.module.css';

export default function Project({ project }) {
  const { id, title, url, comment, use, details, tools } = project;
  return (
    <section className={styles.section} id={id} key={id}>
      <h3 className={styles.header}>
        <a className={styles.a} href={url.deploy}>
          {title}
        </a>
        &nbsp;-&nbsp;
        <span>
          <a className={styles.a} href={url.source}>
            Source
          </a>
        </span>
      </h3>
      {comment ? <p className={styles.p}>{comment}</p> : null}
      <p className={styles.p}>
        <strong>Use: </strong>
        {use}
      </p>
      <p className={styles.p}>
        <strong>Details: </strong>
        {details}
      </p>
      <p className={styles.p}>
        <strong>Build Tools: </strong>
        {tools.map(({ url, name }, index) => (
          <span key={name}>
            {index !== 0 ? <span>, </span> : null}
            <a className={styles.a} href={url}>
              {name}
            </a>
          </span>
        ))}
      </p>
      <p className={styles.p}>
        <a className={`${styles.a} ${styles.exception}`} href={url.contribute}>
          Contribute
        </a>
        &nbsp;/&nbsp;
        <a className={`${styles.a} ${styles.exception}`} href={url.issue}>
          Issue
        </a>
      </p>
    </section>
  );
}
