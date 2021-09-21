import utilStyles from '../styles/utils.module.css';

export default function ProjectList({ projects }) {
  return (
    <div className="listContainer">
      {projects.map(({ id, title, url, comment, use, details, tools }) => (
        // <li className={utilStyles.listItem} key={id}>
        //   {title}
        // </li>
        <section id={id} key={id}>
          <h3>
            <a href={url.deploy}>{title}</a>
            &nbsp;-&nbsp;
            <span>
              <a href={url.source}>Source</a>
            </span>
          </h3>
          {comment ? <p>{comment}</p> : null}
          <p>
            <strong>Use:</strong>
            {use}
          </p>
          <p>
            <strong>Details:</strong>
            {details}
          </p>
          <p>
            <strong>Build Tools:</strong>
            {tools.map(({ url, name }) => (
              <a href={url} key={name}>
                {name}
              </a>
            ))}
          </p>
          <p>
            <a href={url.contribute}>Contribute</a>/
            <a href={url.issue}>Issue</a>
          </p>
        </section>
      ))}
      <style jsx>
        {`
          .listContainer {
            color: blue;
            flex: 1 0 auto;
          }
        `}
      </style>
    </div>
  );
}

// ARCHIVED CODE EXAMPLE
{
  /* <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> */
}
