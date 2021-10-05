import Project from './project';

// AGGREGATES PROJECTS
export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <Project project={project} id={project.id} key={project.id} />
      ))}
    </div>
  );
}
