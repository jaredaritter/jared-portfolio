// import utilStyles from '../styles/utils.module.css';
import Project from './project';

export default function ProjectList({ projects }) {
  return (
    <div className="listContainer">
      {projects.map((project) => (
        <Project project={project} id={project.id} key={project.id} />
      ))}
      <style jsx>
        {`
          .listContainer {
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
