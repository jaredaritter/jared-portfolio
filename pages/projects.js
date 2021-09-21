import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getProjectData } from '../lib/projects';
import Sidebar from '../components/sidebar';
import ProjectList from '../components/project-list';

export default function Projects({ allProjectData }) {
  const { projects } = allProjectData;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="projectsContainer">
        <Sidebar projects={projects} />
        <main>
          <h2>Projects</h2>
          <div id="intro">
            <p>Under Contruction</p>
          </div>
          <ProjectList projects={projects} />
        </main>
      </div>
      <style jsx>
        {`
          .projectsContainer {
            color: gray;
            display: flex;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjectData = getProjectData();
  return {
    props: {
      allProjectData,
    },
  };
}
